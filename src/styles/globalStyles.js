import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
    body {
      height:100vh;
  font-family:'Lato', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
input:focus,
textarea:focus,
select:focus {
  outline: none !important;
  box-shadow: none !important;
  border: 0;
}
.main-page{

  background-color:rgba(229, 229, 229, 0.2);
}
.center{
  display:flex;
  justify-content:center;
  align-items:center;
}
.font-600{
  font-weight:600;
}
.font-700{
  font-weight:700;
}
.font-900{
  font-weight:900;
}

.bottom-navigation{
  background-color: #f5f5f5 !important;
}
.nav-elements{
  &:focus{
    border:0;
    outline:none;
    box-shadow: 0;
  }
}

`;
