/* Employee */
import mysql from 'mysql';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const client = mysql.createConnection({
    host: "localhost",
    user: "ehotel",
    port: 3306,
    password: "2132ehotel!",
    database: "Hotels",
  });

  try {
    const { employeeId } = req.body; // Retrieve the entered employee ID from the request body
    client.connect();
    const result = await new Promise((resolve, reject) => {
      client.query(`SELECT COUNT(*) AS count FROM Employee WHERE Employee_ID = ${employeeId}`, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    const count = result[0].count;
    if (count > 0) {
      // The entered employee ID is valid
      res.status(200).json({ message: 'Access granted' });
    } else {
      // The entered employee ID is invalid
      res.status(401).json({ error: 'Access denied' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.end();
  }
}
