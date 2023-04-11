import mysql from 'mysql';

export default async function handler(req, res) {

  const client = mysql.createConnection({
    host: "localhost",
    user: "ehotel",
    port: 3306,
    password: "2132ehotel!",
    database: "Hotels",
  });

  const { action, data } = req.body;
  const validActions = ['insert', 'update', 'delete', 'search', 'insert_payment', 'check_in', 'rent_now'];

  if (!validActions.includes(action)) {
    res.status(400).json({ error: 'Invalid action' });
    return;
  }

  try {
    client.connect();
    let result;

    switch (action) {
      case 'insert_payment':
        const insertPaymentQuery = `
          INSERT INTO payments (customer_name, ssn_sin, amount)
          VALUES ('${data.customer_name}', '${data.ssn_sin}', '${data.amount}')
        `;
        await new Promise((resolve, reject) => {
          client.query(insertPaymentQuery, (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        });
        result = 'success';
        break;

        case 'check_in':
            const checkInQuery = `
                UPDATE Booking
                SET status = 'renting', Check_in_date = NOW()
                WHERE Booking_ID = ${data.booking_id}
            `;
            await new Promise((resolve, reject) => {
                client.query(checkInQuery, (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
            });
            result = 'success';
            break;
            
            case 'rent_now':
              const customerName = data.customer_name;
              const ssnSin = data.ssn_sin;
              const registrationDate = data.registration_date;
              
              // Insert new customer into Customer table
              const insertCustomerQuery = `
                INSERT INTO Customer (Name, SSN_SIN, Registration_Date)
                VALUES ('${customerName}', '${ssnSin}', '${registrationDate}');
              `;
              
              await new Promise((resolve, reject) => {
                client.query(insertCustomerQuery, (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    resolve(results);
                  }
                });
              });
              
              // Get the ID of the newly inserted customer
              const getLastInsertIdQuery = `
                SELECT LAST_INSERT_ID() as Customer_ID;
              `;
              
              const customerResult = await new Promise((resolve, reject) => {
                client.query(getLastInsertIdQuery, (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    resolve(results);
                  }
                });
              });
              
              const customerId = customerResult[0].Customer_ID;
              const roomId = data.room_id;
              const checkInDate = data.check_in_date;
              const checkOutDate = data.check_out_date;
              
              const checkAvailabilityQuery = `
                SELECT COUNT(*) as count
                FROM Booking
                WHERE Room_ID = ${roomId}
                AND (
                  (Check_in_date BETWEEN '${checkInDate}' AND '${checkOutDate}')
                  OR (Check_out_date BETWEEN '${checkInDate}' AND '${checkOutDate}')
                  OR ('${checkInDate}' BETWEEN Check_in_date AND Check_out_date)
                  OR ('${checkOutDate}' BETWEEN Check_in_date AND Check_out_date)
                )
              `;
              
              const availabilityResult = await new Promise((resolve, reject) => {
                client.query(checkAvailabilityQuery, (error, results) => {
                  if (error) {
                    reject(error);
                  } else {
                    resolve(results);
                  }
                });
              });
              
              if (availabilityResult[0].count === 0) {
                // Insert new booking into Booking table
                const insertBookingQuery = `
                  INSERT INTO Booking (Customer_ID, Room_ID, Check_in_date, Check_out_date, status)
                  VALUES (${customerId}, ${roomId}, '${checkInDate}', '${checkOutDate}', 'renting');
                `;
                
                await new Promise((resolve, reject) => {
                  client.query(insertBookingQuery, (error, results) => {
                    if (error) {
                      reject(error);
                    } else {
                      resolve(results);
                    }
                  });
                });
            
                // Get the Booking ID and Room Price
                const getBookingInfoQuery = `
                  SELECT B.Booking_ID, R.Price
                  FROM Booking B
                  JOIN Room R ON B.Room_ID = R.Room_ID
                  WHERE B.Customer_ID = ${customerId}
                  AND B.Room_ID = ${roomId}
                  AND B.Check_in_date = '${checkInDate}'
                  AND B.Check_out_date = '${checkOutDate}'
                `;
            
                const bookingInfoResult = await new Promise((resolve, reject) => {
                  client.query(getBookingInfoQuery, (error, results) => {
                    if (error) {
                      reject(error);
                    } else {
                      resolve(results);
                    }
                  });
                });
            
                const bookingId = bookingInfoResult[0].Booking_ID;
                const roomPrice = bookingInfoResult[0].Price;
            
                result = {
                  status: 'success',
                  bookingId,
                  customerName,
                  ssnSin,
                  roomPrice
                };
              } else {
                result = { status: 'error', message: 'Room not available for the selected dates.' };
              }
              break;
            

    
      default:
        result = 'invalid action';
    }

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error', message: err.message });
  } finally {
    client.end();
  }
}


