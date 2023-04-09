import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [roomCapacity, setRoomCapacity] = useState("");
	const [hotelCategory, setHotelCategory] = useState("");
	const [priceRange, setPriceRange] = useState(100);
	const [area, setArea] = useState("");
	const [hotelChain, setHotelChain] = useState("");

	const handleStartDateChange = (e) => {
		setStartDate(e.target.value);
	};

	const handleEndDateChange = (e) => {
		setEndDate(e.target.value);
	};

	const handleRoomCapacity = (e) => {
		setRoomCapacity(e.target.value);
	};

	const handleHotelCategory = (e) => {
		setHotelCategory(e.target.value);
	};

	const handleSliderChange = (event) => {
		setPriceRange(event.target.value);
	};

	const handleArea = (e) => {
		setArea(e.target.value);
	};

	const handleHotelChain = (e) => {
		setHotelChain(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// handle form submission here
		// if (!startDate || !endDate || !roomCapacity) {
		// 	// check if any of the fields are empty
		// 	alert("Please fill in all the fields");
		// 	return;
		// }
		// onSubmit({ startDate, endDate, roomCapacity });
	};
	return (
		<>
			<div>
				<Link href="./employeeLogin">
					<button id="employee-login" type="submit">
						Employee Login
					</button>
				</Link>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="start-date">Start Date: </label>
					<input
						type="date"
						id="start-date"
						value={startDate}
						onChange={handleStartDateChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="end-date">End Date: </label>
					<input
						type="date"
						id="end-date"
						value={endDate}
						onChange={handleEndDateChange}
						required
					/>
				</div>
				<div>
					{" "}
					<label>
						Room Capacity:
						<select
							value={roomCapacity}
							onChange={(e) => setRoomCapacity(e.target.value)}
							required
						>
							<option value="">--Select--</option>
							<option value="single">Single</option>
							<option value="double">Double</option>
							<option value="Triple">Triple</option>
							<option value="Quadruple">Quadruple</option>
							<option value="Suite">Suite</option>
						</select>
					</label>
				</div>
				<div>
					Area:
					<input
						type="text"
						id="area"
						name="area"
						required
						value={area}
						onChange={(e) => setArea(e.target.value)}
					/>
				</div>
				<div>
					{" "}
					<label>
						Hotel Chain:
						<select
							value={hotelChain}
							onChange={(e) => setHotelCategory(e.target.value)}
							required
						>
							<option value="">--Select--</option>
							<option value="Marriott International">
								Marriott International
							</option>
							<option value="Hilton Worldwide">Hilton Worldwide</option>
							<option value="Intercontinental Hotels Group">
								Intercontinental Hotels Group
							</option>
							<option value="Wyndham Hotels and Resorts">
								Wyndham Hotels and Resorts
							</option>
							<option value="Choice Hotel Internationals">
								Choice Hotel Internationals
							</option>
						</select>
					</label>
				</div>
				<div>
					{" "}
					<label>
						Hotel Rating:
						<select
							value={hotelCategory}
							onChange={(e) => setHotelCategory(e.target.value)}
							required
						>
							<option value="">--Select--</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</label>
				</div>
				<div>
					<label htmlFor="price-range">
						Price range:
						<span>100</span>
						<input
							type="range"
							id="price-range"
							name="price-range"
							min="100"
							max="1000"
							step="10"
							onChange={handleSliderChange}
							value={priceRange}
						/>
						<span>1000</span>
						<div>
							{" "}
							<p>Price: $100 - ${priceRange}</p>{" "}
						</div>
					</label>
				</div>

				<button type="submit">Search</button>
			</form>
		</>
	);
}
