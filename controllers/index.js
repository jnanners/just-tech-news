const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

//if a request is made to an endpoint that doesn't exist a 404 error will be returned
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;