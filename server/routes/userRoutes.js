const { Router } = require("express");
const router = Router();

const {
  authenticateUser,
} = require("../middlewares/authenticationMiddleware.js");
const { getUser } = require("../controllers/userController.js");

// authentificate User and get User

router.get("/current-user", authenticateUser, getUser);

module.exports = router;
