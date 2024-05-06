const parseBody = require("../http-utils/parseBody");

async function voteRouteController(req, res) {
    if (req.method !== "POST") {
        res.statusCode = 404;
        res.end("Not Found");
    } else try {
        const body = await parseBody(req);
        res.statusCode = 200;
        res.end("Success!");
    } catch(err) {
        res.statusCode = 500;
            res.end("Internal Server Error");
    }
}

module.exports = voteRouteController;