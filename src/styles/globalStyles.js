import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
    body {
  margin: 0;
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
  border: 1px solid #333333 !important;
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



`;
