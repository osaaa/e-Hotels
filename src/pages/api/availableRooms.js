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

  const { startDate = '2023-04-09', endDate = '2023-04-23', roomCapacity = 'Double', hotelCategory = '4', priceRangeMin = 100, priceRangeMax = 600, area = 'NY', hotelChain = 'Hilton Worldwide' } = req.query;
  console.log("Request body: ", req.body);

  try {
    client.connect();

    let query = `
    SELECT h.Hotel_ID as id, h.Name, h.imageUrl, r.Price, h.City, h.Street, h.Email, h.Phone, h.State_or_province, hc.Name AS Hotel_Chain, h.Star_rating, h.Number_of_rooms, COUNT(r.Room_ID) AS Available_Rooms, r.Amenities, r.View
      FROM Room r
      JOIN Hotel h ON r.Hotel_ID = h.Hotel_ID
      JOIN Hotel_chain hc ON h.Chain_ID = hc.Chain_ID
      WHERE r.Capacity = ?
        AND r.Price >= ? AND r.Price <= ?
        AND r.Room_ID NOT IN (
          SELECT Room_ID
          FROM Booking
          WHERE Check_in_date <= ? 
            AND Check_out_date >= ?)
    `;

    let queryParams = [roomCapacity, priceRangeMin, priceRangeMax, startDate, endDate];

    if (area) {
      query += " AND h.State_or_province = ?";
      queryParams.push(area);
    }

    if (hotelChain) {
      query += " AND hc.Name = ?";
      queryParams.push(hotelChain);
    }

    if (hotelCategory) {
      query += " AND h.Star_rating = ?";
      queryParams.push(hotelCategory);
    }

    query += " GROUP BY h.Hotel_ID, h.Name, r.Price, h.City, h.State_or_province, hc.Name, h.Star_rating, h.Number_of_rooms, r.Amenities, r.View";
    console.log("Query: ", query);

    console.log("Final query: ", query);
    console.log("Query parameters: ", queryParams);

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



