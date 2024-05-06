const { PATH_TO_RATING_FILE } = require("../rating");

const fs = require("fs").promises;

async function gameRouteController(res) {
  try {
    const ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
    const data = JSON.parse(ratingFile);
    const game = data[0];
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (err) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

module.exports = gameRouteController;