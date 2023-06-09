const express = require("express");
const {
  storeResponse,
  registerUser,
  markLocation,
  storePDF,interpret
} = require("../controllers/studentControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/marklocation").post(markLocation);
router.route("/response").post(storeResponse);
router.route("/pdf").post(storePDF);
router.route("/interpret").post(interpret);

module.exports = router;
