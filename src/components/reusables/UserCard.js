import { Card, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { signOut } from "../../store/actions/authentication";
import React from "react";
import styled from "styled-components";
import LongMenu from "./LongMenu";

const UserCardStyle = styled(Card)`
  padding: 1em;
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
  .card-text-container {
    h6 {
      font-weight: 600;
    }
  }
  small {
    font-size: 60%;
    font-weight: bold;
  }
  span {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .icon:focus {
    border: 0;
    outline: 0;
    box-shadow: 0;
  }
`;
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderRadius: "25px",
      boxShadow: "0 3px 12px rgba(0, 0, 0, 0.16)",
    },
  })
);

function UserCard({ data, playlistTotal }) {
  const classes = useStyles();
  return (
    <UserCardStyle
      className={classes.root + " user-card"}
      style={{ borderRadius: "10px" }}
    >
      {data && (
        <Grid container justify="space-between">
          <Grid item xs={false} md={2}>
            <div className="image-container">
              <img
                src={
                  data.images.length
                    ? data.images[0]
                    : "https://res.cloudinary.com/ademolamadelewi/image/upload/c_scale,f_auto,h_436,q_auto/v1604793240/homepage_rj0lcp.jpg"
                }
                alt="userImage"
              />
            </div>
          </Grid>
          <Grid
            container
            item
            xs={false}
            md={7}
            className="card-text-container"
          >
            <Grid xs={false} md={12}>
              <h6>{data.display_name}</h6>
            </Grid>
            <Grid item xs={false} md={6}>
              <span>{playlistTotal}</span>{" "}
              <small className="text-muted">Playlists</small>
            </Grid>
            <Grid item xs={false} md={6}>
              <span>{data.followers.total}</span>{" "}
              <small className="text-muted">Followers</small>
            </Grid>
          </Grid>
          <Grid item xs={false} md={2}>
            <LongMenu
              options={["Sign Out"]}
              iconButtonClass="icon"
              func={signOut}
            />
          </Grid>
        </Grid>
      )}
    </UserCardStyle>
  );
}

export default UserCard;
