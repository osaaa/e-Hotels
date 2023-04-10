import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function availableRooms() {
	const [availableHotels, setAvailableHotels] = useState<Hotel[]>([]);
	const [rooms, setRooms] = useState([]);
	const router = useRouter();

	useEffect(() => {
		const fetchRooms = async () => {
			const {
				startDate,
				endDate,
				roomCapacity,
				hotelCategory,
				priceRangeMin,
				priceRangeMax,
				area,
				hotelChain,
			} = router.query;
			// Use the search criteria to query the database or API for available rooms
			const response = await fetch(
				`/api/availableRooms?startDate=${startDate}&endDate=${endDate}&roomCapacity=${roomCapacity}&hotelCategory=${hotelCategory}&priceRangeMin=${priceRangeMin}&priceRangeMax=${priceRangeMax}&area=${area}&hotelChain=${hotelChain}`
			);
			const data = await response.json();
			setRooms(data);
			setAvailableHotels(data);
		};
		fetchRooms();
	}, [router.query]);

	const HotelCard = ({ hotel }: { hotel: Hotel }) => {
		return (
			<div>
				<h3>{hotel.Name}</h3>
				<p>Rating: {hotel.Star_rating}</p>
				<p>Price: ${hotel.Price}</p>
				<p>
					Location: {hotel.City}, {hotel.State_or_province}
				</p>
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
				Available Rooms
				<Link href="./homePage">
					<button
						style={{ marginRight: "50px", marginLeft: "10px" }}
						type="submit"
					>
						Back To Search
					</button>
				</Link>
			</div>
			<div>
				{Array.isArray(availableHotels) &&
					availableHotels.map((hotel) => (
						<HotelCard key={hotel.id} hotel={hotel} />
					))}
			</div>
		</>
	);
}
