const express = require("express");
const router = express.Router();

const authRoute = require("./auth.js");
const anketRoute =require("./anketRoutes.js")




router.use("/auth", authRoute);
router.use("/anket", anketRoute);

module.exports = router;