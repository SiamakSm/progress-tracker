// // skills.data.js 

const pool = require("../db");

// GET all skills
async function getAll() {
  const { rows } = await pool.query(
    "SELECT * FROM skills ORDER BY created_at DESC"
  );
  return rows;
}

// CREATE skill
async function create({ title, category, progress, status }) {
  const { rows } = await pool.query(
    `INSERT INTO skills (title, category, progress, status)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [title, category, progress || 0, status || "active"]
  );
  return rows[0];
}

module.exports = { getAll, create };