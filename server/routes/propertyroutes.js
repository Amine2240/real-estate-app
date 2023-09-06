const express = require("express");
const router = express.Router();
const controllers = require("../controllers/propertycontrollers");
const authmiddlewarefunction = require("../middleware/middlewarefunction");

router.post("/addproperty", controllers.postproperty);
router.delete("/deleteproperty/:id", controllers.deleteproperty);
router.get("/all", controllers.findallelements);
router.put("/updatebool/:id", controllers.updatebool);
router.get("/updatebool/:id", controllers.findoneelement);

module.exports = router;
