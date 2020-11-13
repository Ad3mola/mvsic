import React from "react";
import { SearchOutlined } from "@material-ui/icons";
import styled from "styled-components";

const SearchStyle = styled.form`
  .search-input {
    border: 0;
    &::placeholder {
      font-weight: 700;
      font-size: 0.9rem;
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
      left: 2px;
      svg {
        color: #495057;
      }
    }
  }
`;

function Search() {
  return (
    <SearchStyle>
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
    </SearchStyle>
  );
}

export default Search;
