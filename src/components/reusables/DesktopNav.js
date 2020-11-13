import React from "react";
import styled from "styled-components";

import {
  Home,
  Search,
  Mic,
  QueryBuilder,
  FavoriteBorder,
  PersonOutline,
  Album,
  AddCircleOutline,
} from "@material-ui/icons";
import { Button, Grid } from "@material-ui/core";

const NavStyle = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  padding: 2em 0em;
  font-size: 0.65rem;
  text-transform: uppercase;
  font-weight: 900;
  color: #808487;
  letter-spacing: 0.05em;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.2em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #58b63c;
  }
  & a {
    display: block;
    /* margin: 0.5em 0; */
    color: #808487;
    padding: 0.9em 0;
    width: 100%;
    &:hover {
      text-decoration: none;
    }
  }
  .search {
    width: 85%;
    margin: 0 auto;
  }
  .active,
  a:hover {
    background: linear-gradient(
      90deg,
      rgba(88, 182, 60, 0.4) 0%,
      rgba(255, 255, 255, 0) 29%,
      rgba(255, 255, 255, 0) 100%
    );
    border-left: 3px solid #58b63c;
    color: #58b63c;
  }
  .add-playlist-btn {
    border: 2px solid #58b63c;
    color: #58b63c;
    font-weight: 900;
    font-size: 0.7rem;
    &:focus {
      border-color: #58b63c;
      outline: 0;
      box-shadow: 0;
    }
  }
  .btn-container,
  .link,
  p {
    padding-left: 2.6em;
  }
`;

function DesktopNav() {
  return (
    <NavStyle>
      <Grid container direction="column" justify="center" className="h-100">
        <div className="mt-3 link-category">
          <div className="main-category">
            <a href="/" className="link active">
              <Home fontSize="small" />
              <span className="ml-4">home</span>
            </a>
            <a href="/" className="link">
              <Search fontSize="small" />
              <span className="ml-4">browse</span>
            </a>
            <a href="/" className="link">
              <Mic fontSize="small" />
              <span className="ml-4">radio</span>
            </a>
          </div>
          <div className="mt-5">
            <p>your library</p>
            <a href="/" className="link">
              <QueryBuilder fontSize="small" />
              <span className="ml-4">recently played</span>
            </a>
            <a href="/" className="link">
              <FavoriteBorder fontSize="small" />
              <span className="ml-4">favorite songs</span>
            </a>
            <a href="/" className="link">
              <PersonOutline fontSize="small" />
              <span className="ml-4">artists</span>
            </a>
            <a href="/" className="link">
              <Album fontSize="small" />
              <span className="ml-4">albums</span>
            </a>
          </div>
          <div className=" mt-5">
            <p>playlists</p>
            {/* <a href="/" className="link">
              <span className="ml-4">All Orders</span>
            </a>
            <a href="/" className="link">
              <span className="ml-4">Pending Orders</span>
            </a>
            <a href="/" className="link">
              <span className="ml-4">Reconciled Orders</span>
            </a>
            <p>No playlists</p> */}
          </div>
          <div className="text-center mt-5">
            <Button
              size="small"
              variant="outlined"
              className="add-playlist-btn"
            >
              <AddCircleOutline fontSize="small" />{" "}
              <span className="ml-2">add new playlist</span>
            </Button>
          </div>
        </div>
      </Grid>
    </NavStyle>
  );
}

export default DesktopNav;
