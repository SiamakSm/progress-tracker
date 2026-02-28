// skills.controller.js

const skillsData = require("../data/skills.data");

async function getSkills(req, res, next) {
    try {
        const skills = await skillsData.getAll();
        res.json(skills);
    } catch (err) {
        next(err);
    }
}

async function createSkill(req, res, next) {
    try {

        const { title, category, progress, status } = req.body;

        if (!title || !category)
            return res.status(400).json({ error: "Title and Category required" });

        const skills = await skillsData.create({
            title,
            category,
            progress,
            status,
        });

        res.json(201).json(skills);
    } catch (err) {
        next(err);
    };
};



module.exports = { getSkills, createSkill };