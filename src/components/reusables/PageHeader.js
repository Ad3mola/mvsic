import { Grid, TextField } from "@material-ui/core";
import { Search, SearchOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`
  .search-input {
    border: 0;
    &::placeholder {
      font-weight: 700;
      font-size: 0.9rem;
    }
  }
  .form-group {
    position: relative;

    .search-icon {
      position: absolute;
      top: 6px;
      left: 0;
      svg {
        color: #495057;
      }
    }
  }
`;

function PageHeader() {
  return (
    <HeaderStyles className="mt-4">
      <Grid container justify="space-around">
        <Grid item xs={false} md={6}>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control pl-4 search-input"
                aria-describedby="searchHelp"
                placeholder="Search for songs, artists etc..."
              />
              <div className="search-icon">
                <SearchOutlined fontSize="small" />
              </div>
            </div>
          </form>
        </Grid>
        <Grid item xs={false} md={3}>
          profile
        </Grid>
      </Grid>
    </HeaderStyles>
  );
}

export default PageHeader;
