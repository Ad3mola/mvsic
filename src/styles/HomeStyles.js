import styled from "styled-components";

const HomepageStyle = styled.div`
  .lib-header {
    position: sticky;
    position: -webkit-sticky;
    z-index: 1050;
    top: 20px;
    margin-top: 3.6em !important;
  }
  .library-list {
    li {
      padding: 1em 1em;
      border-top: 1px solid ${(props) => props.theme.libraryBorder};
      a {
        color: ${(props) => props.theme.black};
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
        border-bottom: 1px solid ${(props) => props.theme.libraryBorder};
      }
    }
  }
`;

export default HomepageStyle;
