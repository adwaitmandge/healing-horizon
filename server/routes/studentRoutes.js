const express = require("express");
const {
  storeResponse,
  registerUser,
  markLocation,
} = require("../controllers/studentControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/marklocation").post(markLocation);
router.route("/response").post(storeResponse);

module.exports = router;
