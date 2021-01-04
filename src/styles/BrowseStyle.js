import styled from "styled-components";

export default styled.div`
  .navigation {
    button {
      background-color: transparent;
      font-size: 0.6rem;
      border: 1px solid rgb(88, 182, 60);
      padding: 0.2em 0.5em;
      color: rgb(88, 182, 60);
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
  }
  button.swiper-button-disabled {
    color: lightgray;
    border: 1px solid lightgray;
  }

`;
