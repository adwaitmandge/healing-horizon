const express = require("express");
const {
  storeResponse,
  registerUser,
  markLocation,
  storePDF,
} = require("../controllers/studentControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/marklocation").post(markLocation);
router.route("/response").post(storeResponse);
router.route("/pdf").post(storePDF);

module.exports = router;
