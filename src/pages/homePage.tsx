import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import React, { ChangeEvent, FormEvent } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [roomCapacity, setRoomCapacity] = useState("");
  const [hotelCategory, setHotelCategory] = useState("");
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [area, setArea] = useState("");
  const [hotelChain, setHotelChain] = useState("");
  const [availableHotels, setAvailableHotels] = useState<Hotel[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchAvailableRooms();
  };

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleRoomCapacity = (e: ChangeEvent<HTMLSelectElement>) => {
    setRoomCapacity(e.target.value);
  };

  const handleHotelCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setHotelCategory(e.target.value);
  };

  const handlePriceRangeMin = (event: ChangeEvent<HTMLInputElement>) => {
	setPriceRange([parseFloat(event.target.value), priceRange[1]]);
  };
  
  const handlePriceRangeMax = (event: ChangeEvent<HTMLInputElement>) => {
	setPriceRange([priceRange[0], parseFloat(event.target.value)]);
  };

  const handleArea = (e: ChangeEvent<HTMLSelectElement>) => {
    setArea(e.target.value);
  };

  const handleHotelChain = (e: ChangeEvent<HTMLSelectElement>) => {
    setHotelChain(e.target.value);
  };

  const fetchAvailableRooms = async () => {
	try {
	  const response = await fetch("/api/availableRooms", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
		  price_range: priceRange,
		  capacity: roomCapacity,
		  availability: { check_in: startDate, check_out: endDate },
		  area: area,
		  hotel_chain: hotelChain,
		  star_rating: hotelCategory,
		}),
	  });
  
	  const data = await response.json();
	  setAvailableHotels(data);
	} catch (error) {
	  console.error(error);
	}
  };  

  const HotelCard = ({ hotel }: { hotel: Hotel }) => {
	return (
	  <div>
		<h3>{hotel.Name}</h3>
		<p>Rating: {hotel.Star_rating}</p>
		<p>Price: ${hotel.Price}</p>
		<p>Location: {hotel.City}, {hotel.State_or_province}</p>
		<p>Chain: {hotel.Hotel_Chain}</p>
	  </div>
	);
  };
  

  interface Hotel {
	id: number;
	Name: string;
	Price: number;
	City: string;
	State_or_province: string;
	Hotel_Chain: string;
	Star_rating: number;
	Number_of_rooms: number;
	Available_Rooms: number;
  }

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
							onChange={handleRoomCapacity}
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
							onChange={handleHotelChain}
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
							onChange={handlePriceRangeMax}
  							value={priceRange[1]}
						/>
						<span>1000</span>
						<div>
							{" "}
							<p>Price: ${priceRange[0]} - ${priceRange[1]}</p>{" "}
						</div>
					</label>
				</div>

				<button type="submit">Search</button>
			</form>
			<div>
			{Array.isArray(availableHotels) && availableHotels.map((hotel) => (
          		<HotelCard key={hotel.id} hotel={hotel} />
  			))}
		  </div>
		</>
	);
}
