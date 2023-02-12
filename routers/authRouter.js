/*const router = require(`express`).Router();
const authController = require(`../controllers/authcontroller`);

router.post("/signup",authController.signupController);
router.post("/login",authController.logincontroller);
router.get("/refresh",authController.refreshAccessTokenController);

module.exports = router ;*/

const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signupController);
router.post("/login", authController.loginController);
router.get("/refresh", authController.refreshAccessTokenController);
router.post("/logout", authController.logoutController);

module.exports = router;