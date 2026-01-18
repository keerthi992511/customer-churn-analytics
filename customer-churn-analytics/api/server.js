const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());

const db = new sqlite3.Database("./customer.db");

app.get("/api/churn", (req, res) => {
  db.all(
    "SELECT Churn, COUNT(*) as count FROM customers GROUP BY Churn",
    [],
    (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
      res.json(rows.filter(r => r.Churn));
    }
  );
});

app.listen(4000, () => {
  console.log("API running on port 4000");
});
