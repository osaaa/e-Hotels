import mysql from 'mysql';

export default async function handler(req, res) {
  const client = mysql.createConnection({
    host: "localhost",
    user: "ehotel",
    port: 3306,
    password: "2132ehotel!",
    database: "Hotels",
  });

  client.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database!");
  });

  const { action, table, data } = req.body;

  switch (action) {
    case 'insert':
      insertData(table, data, res);
      break;
    case 'delete':
      deleteData(table, data, res);
      break;
    case 'update':
      updateData(table, data, res);
      break;
    case 'get':
      getData(table, res);
      break;
    default:
      res.status(400).json({ message: 'Invalid action' });
  }

  function insertData(table, data, res) {
    const keys = Object.keys(data).join(', ');
    const values = Object.values(data)
      .map(value => typeof value === 'string' ? `'${value}'` : value)
      .join(', ');

    const query = `INSERT INTO ${table} (${keys}) VALUES (${values})`;

    client.query(query, (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Record inserted', insertId: result.insertId });
    });
  }

  function deleteData(table, data, res) {
    const { idColumn, id } = data;
    const query = `DELETE FROM ${table} WHERE ${idColumn} = ${id}`;

    client.query(query, (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Record deleted', affectedRows: result.affectedRows });
    });
  }

  function updateData(table, data, res) {
    const { idColumn, id, updates } = data;
    const updateString = Object.entries(updates)
      .map(([key, value]) => `${key} = ${typeof value === 'string' ? `'${value}'` : value}`)
      .join(', ');

    const query = `UPDATE ${table} SET ${updateString} WHERE ${idColumn} = ${id}`;

    client.query(query, (err, result) => {
      if (err) throw err;
      res.status(200).json({ message: 'Record updated', affectedRows: result.affectedRows });
    });
  }

  function getData(table, res) {
    const query = `SELECT * FROM ${table}`;

    client.query(query, (err, result) => {
      if (err) throw err;
      res.status(200).json({ data: result });
    });
  }
}
