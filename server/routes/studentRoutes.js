const express = require("express");
const { registerUser, markLocation } = require("../controllers/studentControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/marklocation").post(markLocation);

module.exports = router;
