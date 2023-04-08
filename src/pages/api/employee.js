import mysql from 'mysql';

export default async function handler(req, res) {

  const client = mysql.createConnection({
    host: "localhost",
    user: "ehotel",
    port: 3306,
    password: "2132ehotel!",
    database: "Hotels",
  });

  const { action, bookingId, rentingId, payment } = req.body;

  try {
    client.connect();
    let result;

    if (action === 'checkin') {
      // update Booking to Renting
      const checkinQuery = `
        UPDATE Booking
        SET Check_in_date = NOW()
        WHERE Booking_ID = ${bookingId}
      `;
      await new Promise((resolve, reject) => {
        client.query(checkinQuery, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      // create Renting
      const rentingQuery = `
        INSERT INTO Renting (Customer_ID, Room_ID, Check_in_date, Check_out_date, Problem)
        SELECT Customer_ID, Room_ID, Check_in_date, Check_out_date, FALSE
        FROM Booking
        WHERE Booking_ID = ${bookingId}
      `;
      await new Promise((resolve, reject) => {
        client.query(rentingQuery, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      // delete Booking
      const deleteQuery = `
        DELETE FROM Booking
        WHERE Booking_ID = ${bookingId}
      `;
      await new Promise((resolve, reject) => {
        client.query(deleteQuery, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      result = 'success';
    } else if (action === 'renting') {
      // create Renting
      const rentingQuery = `
        INSERT INTO Renting (Customer_ID, Room_ID, Check_in_date, Check_out_date, Problem)
        VALUES (${payment.customerId}, ${rentingId}, '${payment.checkIn}', '${payment.checkOut}', FALSE)
      `;
      await new Promise((resolve, reject) => {
        client.query(rentingQuery, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      result = 'success';
    } else if (action === 'payment') {
      // insert payment for Renting
      const paymentQuery = `
        UPDATE Renting
        SET Payment = ${payment.amount}
        WHERE Renting_ID = ${rentingId}
      `;
      await new Promise((resolve, reject) => {
        client.query(paymentQuery, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      result = 'success';
    } else {
      result = 'invalid action';
    }

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.end();
  }
}
