import styled from "styled-components";
import LongMenu from "./LongMenu";

const HeaderStyle = styled.div`
  padding: 0.2em;
  background-color: #f5f5f5;
  box-shadow: 0 0.2px 1.9px rgba(0, 0, 0, 0.1);
  border-bottom: ${(props) => (props.scroll ? "1px solid #777" : "none")};
  text-align: right;
  .icon:focus {
    border: 0;
    outline: 0;
    box-shadow: 0;
  }
`;

function MobilePageHeader() {
  return (
    <HeaderStyle className="d-xl-none fixed-top">
      <LongMenu options={["Sign Out"]} iconButtonClass="icon" />
    </HeaderStyle>
  );
}

export default MobilePageHeader;
