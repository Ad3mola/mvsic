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

function DetailsList() {
  return (
    <ListStyle>
      <div className="my-3 d-flex align-items-center">
        <div className="mr-4 img-container">
          <img
            src="https://images.unsplash.com/photo-1510759704643-849552bf3b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="detailImage"
            className="w-100"
          />
        </div>
        <div className="detail-text">
          <p className="m-0 font-weight-bold main-text">The Hapiness Lab</p>
          <small className="font-weight-bold small-text">
            Dr Laurie Sanders
          </small>
          <div>
            <span className="text-muted">
              <SurroundSoundIcon fontSize="small" />{" "}
              <small className="font-weight-bold">audio</small>
            </span>
            <span className="text-muted ml-4">
              <MovieIcon fontSize="small" />{" "}
              <small className="font-weight-bold">20 episodes</small>
            </span>
          </div>
        </div>
      </div>
      <div className="my-3 d-flex align-items-center">
        <div className="mr-4 img-container">
          <img
            src="https://images.unsplash.com/photo-1510759704643-849552bf3b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="detailImage"
            className="w-100"
          />
        </div>
        <div className="detail-text">
          <p className="m-0 font-weight-bold main-text">The Hapiness Lab</p>
          <small className="font-weight-bold small-text">
            Dr Laurie Sanders
          </small>
          <div>
            <span className="text-muted">
              <SurroundSoundIcon fontSize="small" />{" "}
              <small className="font-weight-bold">audio</small>
            </span>
            <span className="text-muted ml-4">
              <MovieIcon fontSize="small" />{" "}
              <small className="font-weight-bold">20 episodes</small>
            </span>
          </div>
        </div>
      </div>
      <div className="my-3 d-flex align-items-center">
        <div className="mr-4 img-container">
          <img
            src="https://images.unsplash.com/photo-1510759704643-849552bf3b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="detailImage"
            className="w-100"
          />
        </div>
        <div className="detail-text">
          <p className="m-0 font-weight-bold main-text">The Hapiness Lab</p>
          <small className="font-weight-bold small-text">
            Dr Laurie Sanders
          </small>
          <div>
            <span className="text-muted">
              <SurroundSoundIcon fontSize="small" />{" "}
              <small className="font-weight-bold">audio</small>
            </span>
            <span className="text-muted ml-4">
              <MovieIcon fontSize="small" />{" "}
              <small className="font-weight-bold">20 episodes</small>
            </span>
          </div>
        </div>
      </div>
    </ListStyle>
  );
}

export default DetailsList;
