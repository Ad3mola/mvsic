import styled from "styled-components";

const LoginStyle = styled.section`
  position: relative;
  background-color: #082946;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.7) 0%,
      rgba(8, 41, 70, 0.7) 100%,
      rgba(0, 212, 255, 0.7) 100%
    ),
    url("https://res.cloudinary.com/ademolamadelewi/image/upload/c_scale,f_auto,h_868,q_auto/v1604793240/homepage_rj0lcp.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h1 {
    color: white;
    span {
      color: #58b63c;
    }
  }
  .login-btn {
    background-color: #58b63c;
    border: 0;
    height: 25px;
    width: 100px;
    border-radius: 20px;
    font-size: 0.5rem;
    font-weight: 900;
    padding: 0.3em 0.5em;
    color: white;
    &:hover {
      opacity: 0.9;
    }
    &:focus {
      border: 0;
      outline: none;
      box-shadow: none;
    }
  }
`;

export default LoginStyle;
