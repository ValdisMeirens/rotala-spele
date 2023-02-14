import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    // console.log(req.body);
    const query =
      "INSERT INTO SAGLABAT(VARDS, ATBILDE1, ATBILDE2, ATBILDE3, ATBILDE4, ATBILDE5, ATBILDE6, ATBILDE7, ATBILDE9, ATBILDE10, ATBILDE11, ATBILDE12, ATBILDE13, ATBILDE15, ATBILDE16) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const values = [
      req.body.VARDS,
      req.body.ATBILDE1,
      req.body.ATBILDE2,
      req.body.ATBILDE3,
      req.body.ATBILDE4,
      req.body.ATBILDE5,
      req.body.ATBILDE6,
      req.body.ATBILDE7,
      req.body.ATBILDE9,
      req.body.ATBILDE10,
      req.body.ATBILDE11,
      req.body.ATBILDE12,
      req.body.ATBILDE13,
      req.body.ATBILDE15,
      req.body.ATBILDE16,
    ];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    return res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
