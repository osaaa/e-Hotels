import mysql from 'mysql';

export default async function handler(req, res) {
  const client = mysql.createConnection({
    host: "localhost",
    user: "ehotel",
    port: 3306,
    password: "2132ehotel!",
    database: "Hotels",
  });

  const { name, ssn_sin, registrationDate, roomId, checkInDate, checkOutDate } = req.body;

  try {
    client.connect();

    const insertCustomerQuery = `
      INSERT INTO Customer (Name, SSN_SIN, Registration_Date)
      VALUES (?, ?, ?);
    `;
    const customerParams = [name, ssn_sin, registrationDate];

    const customerInsertResult = await new Promise((resolve, reject) => {
      client.query(insertCustomerQuery, customerParams, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    const customerId = customerInsertResult.insertId;

    const insertBookingQuery = `
      INSERT INTO Booking (Customer_ID, Room_ID, Check_in_date, Check_out_date)
      VALUES (?, ?, ?, ?);
    `;
    const bookingParams = [customerId, roomId, checkInDate, checkOutDate];

    const bookingInsertResult = await new Promise((resolve, reject) => {
      client.query(insertBookingQuery, bookingParams, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    const bookingNumber = bookingInsertResult.insertId;

    res.status(200).json({ bookingNumber, customerId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.end();
  }
}


