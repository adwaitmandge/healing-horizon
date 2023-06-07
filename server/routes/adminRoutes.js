const express = require("express");
const {
  registerUser,
  authUser,
  getStudents,
  getCoordinates,
} = require("../controllers/adminControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.get("/student", protect, getStudents);
router.get("/coordinates", getCoordinates);

module.exports = router;
