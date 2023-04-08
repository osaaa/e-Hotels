import mysql from "mysql";

export default async function handler(req, res) {
	const { employeeID } = req.body;

	const connection = mysql.createConnection({
		host: "localhost",
		user: "ehotel",
		port: 3306,
		password: "2132ehotel!",
		database: "Hotels",
	});

	connection.connect();

	const query = `SELECT COUNT(*) AS count FROM employees WHERE id=${employeeID}`;

	connection.query(query, function (error, results, fields) {
		if (error) throw error;
		const count = results[0].count;

		if (count === 1) {
			res.status(200).json({ success: true });
			print("osa");
		} else {
			res.status(400).json({ success: false });
			print("sosa");
		}

		connection.end();
	});
}
