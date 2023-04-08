import mysql from 'mysql';

export default async function handler(req, res) {
  const client = mysql.createConnection({
    host: "localhost",
    user: "ehotel",
    port: 3306,
    password: "2132ehotel!",
    database: "Hotels",
  });

  const { customer_id, room_id, check_in_date, check_out_date } = req.body;

  try {
    client.connect();

    // Check if the room is available for the given check-in and check-out dates
    const availability = await new Promise((resolve, reject) => {
      const query = `
        SELECT Room_ID
        FROM Booking
        WHERE Room_ID = '${room_id}'
          AND Check_in_date < '${check_out_date}'
          AND Check_out_date > '${check_in_date}'
      `;
      client.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    if (availability.length > 0) {
      res.status(400).json({ error: 'The room is not available for the selected dates' });
      return;
    }

    // Insert the new booking record
    const result = await new Promise((resolve, reject) => {
      const query = `
        INSERT INTO Booking (Customer_ID, Room_ID, Check_in_date, Check_out_date)
        VALUES ('${customer_id}', '${room_id}', '${check_in_date}', '${check_out_date}')
      `;
      client.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    res.status(200).json({ message: 'Booking created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.end();
  }
}
