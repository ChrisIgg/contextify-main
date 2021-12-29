const db = require("../config/connection");
const { Profile, Item, Search } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const itemSeeds = require("./itemSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
