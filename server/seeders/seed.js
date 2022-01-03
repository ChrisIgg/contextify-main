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

    // await Profile.create(profileSeeds);
    // await Item.create(itemSeeds);
    // // Continuing to work on searchSeeds
    // await Search.create(searchSeeds);

    //bulk create each model
    const profiles = await Profile.insertMany(profileSeeds);
    const items = await Item.insertMany(itemSeeds);
    const searches = await Search.insertMany(searchSeeds);

    //The for loop is not functional yet, however you can still use the other models and seed data to test out the front-end
    // for (let i = 0; i < itemSeeds.length; i++) {
    //   const { _id, itemName } = await Item.create(itemSeeds[i]);
    //   const userSearch = await Search.findOneAndUpdate(
    //     { name: itemName },
    //     {
    //       $addToSet: {
    //         fieldB: _id,
    //       },
    //     }
    //   );
    //   console.log(userSearch);
    // }
    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
