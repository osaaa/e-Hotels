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

  const { priceRangeMin, priceRangeMax, roomCapacity, startDate = '2000-01-01', endDate = '2100-01-01', area, hotelChain, star_rating } = req.query;
  console.log("Request body: ", req.body);

  try {
    client.connect();

    let query = `
    SELECT h.Hotel_ID as id, h.Name, r.Price, h.City, h.State_or_province, hc.Name AS Hotel_Chain, h.Star_rating, h.Number_of_rooms, COUNT(r.Room_ID) AS Available_Rooms
    FROM Room r
    JOIN Hotel h ON r.Hotel_ID = h.Hotel_ID
    JOIN Hotel_chain hc ON h.Chain_ID = hc.Chain_ID
    WHERE r.Capacity = 'Single'
      AND r.Price >= '100 ' AND r.Price <= '610'
      AND r.Room_ID NOT IN (
        SELECT Room_ID
        FROM Booking
        WHERE Check_in_date <= '2023-04-10' 
          AND Check_out_date >= '2023-04-24')
    AND CONCAT_WS(', ', h.City, h.State_or_province) = 'MA' AND hc.Name = 'Hilton Worldwide' 
    GROUP BY h.Hotel_ID, h.Name, r.Price, h.City, h.State_or_province, hc.Name, h.Star_rating, h.Number_of_rooms
    
    `;

    let queryParams = [roomCapacity, priceRangeMin, priceRangeMax, endDate, startDate];

    if (area) {
      query += " AND CONCAT_WS(', ', h.City, h.State_or_province) = 'MA'";
      queryParams.push(area);
    }

    if (hotelChain) {
      query += " AND hc.Name = 'Hilton Worldwide'";
      queryParams.push(hotelChain);
    }

    if (star_rating) {
      query += " AND h.Star_rating = '4'";
      queryParams.push(star_rating);
    }

    query += " GROUP BY h.Name, r.Price, h.City, h.State_or_province, hc.Name, h.Star_rating, h.Number_of_rooms";
    console.log("Query: ", query);

    const result = await new Promise((resolve, reject) => {
      client.query(query, queryParams, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    console.log("Result: ", result);

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.end();
  }
}
