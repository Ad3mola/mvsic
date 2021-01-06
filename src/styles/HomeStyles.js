import styled from "styled-components";

const HomepageStyle = styled.div`
  .library-list {
    li {
      padding: 1em 1em;
      border-top: 1px solid #777;
      a {
        color: black;
        display: inline-block;
        width: 100%;
        height: 100%;
        &:focus,
        &:hover {
          text-decoration: none;
        }
      }
      span {
        margin-left: 1em;
        font-weight: 600;
      }
      &:last-child {
        border-bottom: 1px solid #777;
      }
    }
  }
`;

export default HomepageStyle;
