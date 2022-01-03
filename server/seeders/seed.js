const db = require("../config/connection");
const { Profile, Item, Search } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const itemSeeds = require("./itemSeeds.json");
const searchSeeds = require("./searchSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Item.deleteMany({});
    await Search.deleteMany({});

    await Profile.create(profileSeeds);
    await Item.create(itemSeeds);
    await Search.create(searchSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
