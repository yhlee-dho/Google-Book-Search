const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// api routing
router.use("/api", apiRoutes);

// fallback to react app if no routes are found
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;