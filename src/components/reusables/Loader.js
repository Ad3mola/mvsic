import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const LoaderStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    color: rgba(88, 182, 60, 0.8) !important;
  }
`;

function Loader() {
  return (
    <LoaderStyle>
      <CircularProgress thickness={6} size={60} className="loader" />
    </LoaderStyle>
  );
}

export default Loader;
