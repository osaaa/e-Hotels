import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

interface Hotel {
	id: number;
	Name: string;
	imageUrl: string;
	Price: number;
	City: string;
	State_or_province: string;
	Hotel_Chain: string;
	Star_rating: number;
	Number_of_rooms: number;
	Available_Rooms: number;
	Amenities: string;
	View: string;
	Phone: string;
	Street: string;
	Email: string;
}

export default function availableRooms() {
	const [availableHotels, setAvailableHotels] = useState<Hotel[]>([]);
	const router = useRouter();

	useEffect(() => {
		const fetchRooms = async () => {
			const {
				startDate = "2023-04-09",
				endDate = "2023-04-24",
				roomCapacity = "Double",
				hotelCategory = "4",
				priceRangeMin = "100",
				priceRangeMax = "610",
				area = "NY",
				hotelChain = "Hilton Worldwide",
			} = router.query;
			// Use the search criteria to query the database or API for available rooms
			const response = await fetch(
				`/api/availableRooms?startDate=${startDate}&endDate=${endDate}&roomCapacity=${roomCapacity}&hotelCategory=${hotelCategory}&priceRangeMin=${priceRangeMin}&priceRangeMax=${priceRangeMax}&area=${area}&hotelChain=${hotelChain}`
			);
			const data = await response.json();
			setAvailableHotels(data);
		};
		fetchRooms();
	}, [router.query]);

	const HotelRow = ({ hotel }: { hotel: Hotel }) => {
		return (
			<tr>
				<td>{hotel.Name}</td>
				<td>
					<img
						src={hotel.imageUrl}
						alt={`Image of ${hotel.Name}`}
						style={{ maxWidth: "100px", maxHeight: "100px" }}
					/>
				</td>
				<td>{hotel.Star_rating}</td>
				<td>${hotel.Price}</td>
				<td>{hotel.Amenities}</td>
				<td>{hotel.View}</td>
				<td>{hotel.Street}</td>
				<td>{hotel.City}</td>
				<td>{hotel.State_or_province}</td>
				<td>{hotel.Hotel_Chain}</td>
				<td>{hotel.Email}</td>
				<td>{hotel.Phone}</td>
				<td>
					<button
						onClick={() =>
							router.push(
								`/customerBooking?roomId=${hotel.id}&startDate=${router.query.startDate}&endDate=${router.query.endDate}`
							)
						}
					>
						Select
					</button>
				</td>
			</tr>
		);
	};

	return (
		<>
			<h1>Available Rooms</h1>
			<Link href="./homePage">
				<button
					style={{ marginRight: "50px", marginLeft: "10px" }}
					type="submit"
				>
					Back To Search
				</button>
			</Link>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Hotel name</th>
						<th>Image</th>
						<th>Star rating</th>
						<th>Price</th>
						<th>Amenities</th>
						<th>View</th>
						<th>Street</th>
						<th>City</th>
						<th>State or province</th>
						<th>Hotel chain</th>
						<th>Email</th>
						<th>Phone</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{Array.isArray(availableHotels) &&
						availableHotels.map((hotel) => (
							<HotelRow key={hotel.id} hotel={hotel} />
						))}
				</tbody>
			</table>
		</>
	);
}
