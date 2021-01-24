import React from "react";
import styled from "styled-components";
import { useGlobalState } from "../../store/reducers/rootReducer";

import Search from "../reusables/Search";

const SearchStyles = styled.div`
  min-height: 82vh;
  margin-top: 4em;
  .search-input {
    background-color: rgba(229, 229, 229, 0.6) !important;
  }
  .search-body {
    margin-top: 1.2em;

    .img-container {
      width: 80px;
      img {
        border-radius: 10px;
      }
    }
  }
  @media (max-width: 576px) {
    .detail-text {
      p span {
        font-size: 0.8rem;
      }
    }
  }
`;

function SearchSong() {
  const { searchList, loading } = useGlobalState();
  return (
    <SearchStyles className=" pb-5 px-xl-5 mt-xl-2 d-xl-none overflow-hidden container">
      <Search />

      <div className="my-5 search-body">
        {searchList ? (
          <div className="">
            <div className="artists">
              {searchList.artists.items.length ? (
                <>
                  <h2>Artists</h2>
                  {searchList.artists.items.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="my-3 d-flex align-items-center"
                    >
                      <div className="mr-4 w-25 img-container">
                        <img
                          src={item.images.length && item.images[1].url}
                          alt="detailImage"
                          className="w-100"
                        />
                      </div>
                      <div className="w-75 detail-text">
                        <p className="m-0 font-weight-bold main-text">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
            <div className="tracks">
              {searchList.tracks.items.length ? (
                <>
                  <h2>Tracks</h2>
                  {searchList.tracks.items.map((item) => (
                    <div
                      key={item.id}
                      className="my-3 d-flex align-items-center"
                    >
                      <div className="w-25 mr-4 img-container">
                        <img
                          src={
                            item.album.images.length && item.album.images[1].url
                          }
                          alt="detailImage"
                          className="w-100"
                        />
                      </div>
                      <div className="w-75 detail-text">
                        <p className="m-0  main-text">
                          <span className="font-weight-bold"> {item.name}</span>{" "}
                          <small className="text-muted">
                            - {item.artists[0].name}
                          </small>
                        </p>
                        <small className="text-muted small-text">
                          {item.album.album_type}
                        </small>
                      </div>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </div>
        ) : null}
        {loading ? <p className="container-fluid">Loading...</p> : null}
      </div>
    </SearchStyles>
  );
}

export default SearchSong;
