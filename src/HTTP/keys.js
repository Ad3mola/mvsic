let keys = {};

if (process.env.NODE_ENV === "production") {
  keys = {
    token: process.env.TOKEN,
    clientID: process.env.CLIENT_ID,
  };
} else {
  keys = require("./devKeys").default;
}

export default keys;
