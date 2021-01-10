let keys = {};

if (process.env.NODE_ENV === "production") {
  keys = {
    token: process.env.REACT_APP_TOKEN,
    clientID: process.env.REACT_APP_CLIENT_ID,
  };
} else {
  keys = require("./devKeys").default;
}

export default keys;
