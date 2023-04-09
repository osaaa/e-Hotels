import mysql from 'mysql';

export default async function handler(req, res) {

  const client = mysql.createConnection({
    host: "localhost",
    user: "ehotel",
    port: 3306,
    password: "2132ehotel!",
    database: "Hotels",
  });

  try {
    client.connect();
    const result = await new Promise((resolve, reject) => {
      
      client.query(`SELECT DISTINCT r.Capacity, h.Name AS Hotel_Name, h.Address AS Hotel_Address FROM Room r JOIN Hotel h ON r.Hotel_ID = h.Hotel_ID WHERE r.Capacity = '${room_capacity}'`, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.end();
  }
}