/* This code will return the name, price, area, hotel chain, category,
 * total number of rooms, and number of available rooms for each hotel 
 * that meets the given criteria.
 */
import mysql from 'mysql';

export default async function handler(req, res) {
  const client = mysql.createConnection({
    host: "localhost",
    user: "ehotel",
    port: 3306,
    password: "2132ehotel!",
    database: "Hotels",
  });

  const { price_range, capacity, availability, area, hotel_chain, category } = req.body;

  try {
    client.connect();

    let query = `
      SELECT h.Name, r.Price, h.Area, hc.Name AS Hotel_Chain, h.Category, h.Number_of_rooms, COUNT(r.Room_ID) AS Available_Rooms
      FROM Room r
      JOIN Hotel h ON r.Hotel_ID = h.Hotel_ID
      JOIN Hotel_chain hc ON h.Chain_ID = hc.Chain_ID
      WHERE r.Capacity = '${capacity}'
        AND r.Price >= '${price_range[0]}' AND r.Price <= '${price_range[1]}'
        AND r.Room_ID NOT IN (
          SELECT Room_ID
          FROM Booking
          WHERE Check_in_date <= '${availability.check_in}'
            AND Check_out_date >= '${availability.check_out}')`;

    if (area) {
      query += ` AND h.Area = '${area}'`;
    }

    if (hotel_chain) {
      query += ` AND hc.Name = '${hotel_chain}'`;
    }

    if (category) {
      query += ` AND h.Category = '${category}'`;
    }

    query += ` GROUP BY h.Name, r.Price, h.Area, hc.Name, h.Category, h.Number_of_rooms`;

    const result = await new Promise((resolve, reject) => {
      client.query(query, (error, results) => {
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



