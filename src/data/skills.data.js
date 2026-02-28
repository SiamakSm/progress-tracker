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


async function update(id, fields) {
  const { title, category, progress, status } = fields;

  const { rows } = await pool.query(
    `UPDATE skills
     SET title = COALESCE($1, title),
         category = COALESCE($2, category),
         progress = COALESCE($3, progress),
         status = COALESCE($4, status)
     WHERE id = $5
     RETURNING *`,
    [title, category, progress, status, id]);

  return rows[0];
};


async function remove(id) {
  const { rows } = await pool.query(
    `DELETE FROM skills WHERE id = $1‡`, [id]);
};






module.exports = { getAll, create, remove, update };