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
              INSERT INTO payments (customer_name, ssn_sin, amount, date)
              VALUES ('${data.customer_name}', '${data.ssn_sin}', '${data.amount}', NOW())
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
                UPDATE bookings
                SET status = 'renting', check_in_date = NOW()
                WHERE id = ${data.booking_id}
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
            const rentNowQuery = `
                INSERT INTO rentals (room_number, customer_name, ssn_sin, check_in_date)
                VALUES ('${data.room_number}', '${data.customer_name}', '${data.ssn_sin}', NOW())
            `;
            await new Promise((resolve, reject) => {
                client.query(rentNowQuery, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
                });
            });
            result = 'success';
            break;
    
      default:
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
