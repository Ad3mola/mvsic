import { Card, Grid, IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import LongMenu from "./LongMenu";

const UserCardStyle = styled(Card)`
  padding: 1em;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 2px 5px rgba(245, 245, 245, 0.99);
  .image-container {
    height: 40px;
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  small {
    font-size: 60%;
    font-weight: bold;
  }
  span {
    font-weight: bold;
    font-size: 0.9rem;
  }
  .icon:focus {
    border: 0;
    outline: 0;
    box-shadow: 0;
  }
`;

function UserCard() {
  return (
    <UserCardStyle className="user-card" variant="outlined">
      <Grid container justify="space-between">
        <Grid item xs={false} md={2}>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/ademolamadelewi/image/upload/c_scale,f_auto,h_436,q_auto/v1604793240/homepage_rj0lcp.jpg"
              alt="userImage"
            />
          </div>
        </Grid>
        <Grid container item xs={false} md={7}>
          <Grid xs={false} md={12}>
            <h6>Ademola</h6>
          </Grid>
          <Grid item xs={false} md={6}>
            <span>120</span> <small className="text-muted">Playlists</small>
          </Grid>
          <Grid item xs={false} md={6}>
            <span>120</span> <small className="text-muted">Followers</small>
          </Grid>
        </Grid>
        <Grid item xs={false} md={2}>
          <LongMenu options={["Sign Out"]} iconButtonClass="icon" />
        </Grid>
      </Grid>
    </UserCardStyle>
  );
}

export default UserCard;
