import styled from "styled-components";

const HomepageStyle = styled.div`
  .header {
    font-size: 3.5rem;
    font-weight: 900;
  }
  .library-list {
    li {
      padding: 1em 1em;
      border-top: 1px solid black;
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
        border-bottom: 1px solid black;
      }
    }
  }
  @media (max-width: 768.98px) {
    .header {
      font-size: 2rem;
    }
  }
`;

export default HomepageStyle;
