import React, { useState } from "react";
import { SearchOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getSearch } from "../../store/actions/songs";
import { useGlobalState } from "../../store/reducers/rootReducer";
import useComponentVisible from "./useComponentVisible";
import CardItem from "./CardItem";

const SearchStyle = styled.form`
  position: relative;
  .search-input {
    border: 0;
    background-color: rgba(229, 229, 229, 0.2) !important;
    padding-left: 2.6em !important;
    &::placeholder {
      font-weight: 600;
      font-size: 0.9rem;
    }
  }
  .search-body {
    position: absolute;
    top: 40px;
    z-index: 1000;
    width: 100%;
    height: 100%;
    margin-top: 1.2em;
    .img-container {
      width: 80px;
      img {
        border-radius: 10px;
      }
    }
    .card {
      padding: 1em;
    }
  }
  .form-group {
    position: relative;
    input {
      border-radius: 40px;
      background: transparent;
    }
    .search-icon {
      position: absolute;
      top: 6px;
      left: 8px;
      svg {
        color: #495057;
      }
    }
  }
`;

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(true);
  const { searchList } = useGlobalState();
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    if (searchQuery !== "") {
      dispatch(getSearch(searchQuery));
      setIsComponentVisible(true);
    }
  };

  return (
    <SearchStyle onSubmit={search}>
      <div className="form-group">
        <input
          type="text"
          className="form-control pl-4 search-input"
          aria-describedby="searchHelp"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          placeholder="Search for songs, artists etc..."
          value={searchQuery}
        />
        <div className="search-icon">
          <SearchOutlined fontSize="small" />
        </div>
      </div>
      {searchList && isComponentVisible && (
        <div className="d-none d-xl-block search-body" ref={ref}>
          <div className="card">
            <div className="artists">
              {searchList.artists.items.length ? (
                <>
                  <h2>Artists</h2>
                  {searchList.artists.items.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="my-3 d-flex align-items-center"
                    >
                      <div className="mr-4 img-container">
                        <img
                          src={item.images.length && item.images[1].url}
                          alt="detailImage"
                          className="w-100"
                        />
                      </div>
                      <div className="detail-text">
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
                  {searchList.tracks.items.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="my-3 d-flex align-items-center"
                    >
                      <div className="mr-4 img-container">
                        <img
                          src={
                            item.album.images.length && item.album.images[1].url
                          }
                          alt="detailImage"
                          className="w-100"
                        />
                      </div>
                      <div className="detail-text">
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
        </div>
      )}
    </SearchStyle>
  );
}

export default Search;
