const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Example API to fetch all users
router.get("/users", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Example API to add a new user
router.post("/user", async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    res.json({ id: result.insertId, name, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
