// skills.routes.js 
// 

const express = require("express");
const router = express.Router();
const controller = require("../controllers/skills.controller");

router.get("/", controller.getSkills);
router.post("/", controller.createSkill);


module.exports = router;