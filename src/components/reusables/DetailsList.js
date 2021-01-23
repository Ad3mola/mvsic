import React from "react";
import styled from "styled-components";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import MovieIcon from "@material-ui/icons/Movie";

const ListStyle = styled.section`
  margin-top: 1.2em;
  .img-container {
    width: 80px;
    img {
      border-radius: 10px;
    }
  }
`;

function DetailsList({ data, loading }) {
  return (
    <ListStyle className="container-fluid">
      {data.length
        ? data.map((item) => (
            <div key={item.id} className="my-3 d-flex align-items-center">
              <div className="mr-4 img-container">
                <img
                  src={item.images[0].url}
                  alt="detailImage"
                  className="w-100"
                />
              </div>
              <div className="detail-text">
                <p className="m-0 font-weight-bold main-text">{item.name}</p>
                <small className="font-weight-bold small-text">
                  {item.publisher}
                </small>
                <div>
                  <span className="text-muted">
                    <SurroundSoundIcon fontSize="small" />{" "}
                    <small className="font-weight-bold">
                      {item.media_type}
                    </small>
                  </span>
                  <span className="text-muted ml-4">
                    <MovieIcon fontSize="small" />{" "}
                    <small className="font-weight-bold">
                      {item.total_episodes} <span>Episodes</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
          ))
        : null}
      {loading ? <p className="container-fluid">Loading...</p> : null}
    </ListStyle>
  );
}

export default DetailsList;
