const express = require("express");
const router = express.Router();
const controllers = require("../controllers/usercontrollers");

router.post("/signin", controllers.handlesignin);
router.post("/login", controllers.handlelogin);
router.post("/logout", controllers.handlelogout);
router.get("/loginbool", controllers.authmiddlewarebooleen);

module.exports = router;
