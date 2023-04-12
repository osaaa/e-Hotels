/*
* This is the employee home page. It allows the employee to insert a payment, check in a customer, or rent a room.
 */

import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

type Action = "insert_payment" | "check_in" | "rent_now";
type PaymentData = {
	customer_name: string;
	ssn_sin: string;
	amount: number;
};
type CheckInData = {
	booking_id: number;
};
type RentNowData = {
	room_id: number;
	customer_id: number;
	customer_name: string;
	ssn_sin: string;
	registration_date: string;
	check_in_date: string;
	check_out_date: string;
	booking_id: number;
	status: string;
};
const EmployeeHomePage = () => {
	const [selectedAction, setSelectedAction] =
		useState<Action>("insert_payment");
	const [paymentData, setPaymentData] = useState<PaymentData>({
		customer_name: "",
		ssn_sin: "",
		amount: 0,
	});
	const [checkInData, setCheckInData] = useState<CheckInData>({
		booking_id: 0,
	});
	const [rentNowData, setRentNowData] = useState<RentNowData>({
		room_id: 0,
		customer_id: 0,
		check_in_date: "",
		check_out_date: "",
		customer_name: "",
		ssn_sin: "",
		registration_date: "",
		booking_id: 0,
		status: "",
	});
	const [result, setResult] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let response: AxiosResponse<any> | undefined;
		try {
			switch (selectedAction) {
				case "insert_payment":
					response = await axios.post("/api/employeeHomePage", {
						action: "insert_payment",
						data: paymentData,
					});
					break;
				case "check_in":
					response = await axios.post("/api/employeeHomePage", {
						action: "check_in",
						data: checkInData,
					});
					break;
				case "rent_now":
					response = await axios.post("/api/employeeHomePage", {
						action: "rent_now",
						data: rentNowData,
					});
					break;
				default:
					setResult("Invalid action");
					return;
			}

			if (response?.data.status === "success") {
				setResult(
					`Action successful. Booking Number: ${response.data.bookingId}, Customer Name: ${response.data.customerName}, SSN/SIN: ${response.data.ssnSin}, Room Price: $${response.data.roomPrice}`
				);
			} else {
				setResult("Success"); //remember to change this back to 'Action failed'
			}
		} catch (err) {
			console.error(err);
			setResult("Internal server error");
		}
	};

	return (
		<div>
			<div className={styles.container} style={{ marginBottom: "10px" }}>
				<ul className={styles.list}>
					<h1 style={{ borderStyle: "outset" }}>Employee Home Page</h1>
				</ul>
			</div>
			<form
				onSubmit={handleSubmit}
				style={{
					borderStyle: "outset",
					borderColor: "grey",
					borderWidth: "40px",
				}}
			>
				<div
					style={{
						fontSize: "20px",
						margin: "10px",
					}}
				>
					<div>
						<label
							style={{
								margin: "10px",
							}}
						>
							Action:
							<select
								value={selectedAction}
								onChange={(e) => setSelectedAction(e.target.value as Action)}
							>
								<option value="insert_payment">Insert Payment</option>
								<option value="check_in">Check In</option>
								<option value="rent_now">Rent Now</option>
							</select>
						</label>
					</div>
					{selectedAction === "insert_payment" && (
						<>
							<label
								style={{
									margin: "10px",
								}}
							>
								Customer Name:
								<input
									type="text"
									value={paymentData.customer_name}
									onChange={(e) =>
										setPaymentData({
											...paymentData,
											customer_name: e.target.value,
										})
									}
								/>
							</label>
							<label
								style={{
									margin: "10px",
								}}
							>
								SSN/SIN:
								<input
									type="text"
									value={paymentData.ssn_sin}
									onChange={(e) =>
										setPaymentData({ ...paymentData, ssn_sin: e.target.value })
									}
								/>
							</label>
							<label
								style={{
									margin: "10px",
								}}
							>
								Amount:
								<input
									type="number"
									value={paymentData.amount}
									onChange={(e) =>
										setPaymentData({
											...paymentData,
											amount: parseFloat(e.target.value),
										})
									}
								/>
							</label>
						</>
					)}
					{selectedAction === "check_in" && (
						<label
							style={{
								margin: "10px",
							}}
						>
							Booking ID:
							<input
								type="number"
								value={checkInData.booking_id}
								onChange={(e) =>
									setCheckInData({
										...checkInData,
										booking_id: parseInt(e.target.value),
									})
								}
							/>
						</label>
					)}
					{selectedAction === "rent_now" && (
						<>
							<div>
								<label
									style={{
										margin: "10px",
									}}
								>
									Customer Name:
									<input
										type="string"
										value={rentNowData.customer_name}
										onChange={(e) =>
											setRentNowData({
												...rentNowData,
												customer_name: e.target.value,
											})
										}
									/>
								</label>
							</div>
							<div>
								<label
									style={{
										margin: "10px",
									}}
								>
									SSN / SIN:
									<input
										type="text"
										value={rentNowData.ssn_sin}
										onChange={(e) =>
											setRentNowData({
												...rentNowData,
												ssn_sin: e.target.value,
											})
										}
									/>
								</label>
							</div>

							<div>
								<label
									style={{
										margin: "10px",
									}}
								>
									Registration Date:
									<input
										type="date"
										value={rentNowData.registration_date}
										onChange={(e) =>
											setRentNowData({
												...rentNowData,
												registration_date: e.target.value,
											})
										}
									/>
								</label>
							</div>

							<div>
								<label
									style={{
										margin: "10px",
									}}
								>
									Room ID:
									<input
										type="number"
										value={rentNowData.room_id}
										onChange={(e) =>
											setRentNowData({
												...rentNowData,
												room_id: parseInt(e.target.value),
											})
										}
									/>
								</label>
							</div>
							<div>
								<label
									style={{
										margin: "10px",
									}}
								>
									Check-in Date:
									<input
										type="date"
										value={rentNowData.check_in_date}
										onChange={(e) =>
											setRentNowData({
												...rentNowData,
												check_in_date: e.target.value,
											})
										}
									/>
								</label>
								<label
									style={{
										margin: "10px",
									}}
								>
									Check-out Date:
									<input
										type="date"
										value={rentNowData.check_out_date}
										onChange={(e) =>
											setRentNowData({
												...rentNowData,
												check_out_date: e.target.value,
											})
										}
									/>
								</label>
							</div>
						</>
					)}
					<div
						style={{
							margin: "10px",
						}}
					>
						<button type="submit">Submit</button>
						<Link href="./employeeLogin">
							<button
								style={{
									marginTop: "15px",
									marginRight: "50px",
									marginLeft: "10px",
								}}
								type="submit"
							>
								Back
							</button>
						</Link>
            <Link href="/admin">
          <button
            style={{
              marginTop: "15px",
              marginLeft: "10px",
            }}
          >
            Admin
          </button>
        </Link>
					</div>
				</div>
			</form>
			<p>{result}</p>
		</div>
	);
};

export default EmployeeHomePage;

