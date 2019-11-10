const fs = require("fs");
const Db = require("tingodb")().Db;
const config = require("./fastfy.config");

const dataDir = "./data";

fs.mkdirSync(dataDir, { recursive: true });

const db = new Db(dataDir, {});
const Users = db.collection("users");

Users.insert(
  [
    {
      username: "admin",
      password: config.hash("123"),
      email: "debagger@gmail.com",
      role: "admin"
    }
  ],
  function(err, item) {
    if (item) console.log(item);
    if (err) console.error(err);
  }
);
