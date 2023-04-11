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
				<td className={styles.tableData}>{hotel.Name}</td>
				<td className={styles.tableData}>
					<img
						src={hotel.imageUrl}
						alt={`Image of ${hotel.Name}`}
						style={{ maxWidth: "100px", maxHeight: "100px" }}
					/>
				</td>
				<td className={styles.tableData}>{hotel.Star_rating}</td>
				<td className={styles.tableData}>${hotel.Price}</td>
				<td className={styles.tableData}>{hotel.Amenities}</td>
				<td className={styles.tableData}>{hotel.View}</td>
				<td className={styles.tableData}>{hotel.Street}</td>
				<td className={styles.tableData}>{hotel.City}</td>
				<td className={styles.tableData}>{hotel.State_or_province}</td>
				<td className={styles.tableData}>{hotel.Hotel_Chain}</td>
				<td className={styles.tableData}>{hotel.Email}</td>
				<td className={styles.tableData}>{hotel.Phone}</td>
				<td className={styles.tableData}>
					<button
						className={styles.availRoomSelect}
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
			<div className={styles.container} style={{ marginBottom: "10px" }}>
				<ul className={styles.list}>
					<h1 style={{ borderStyle: "outset" }}>Available Rooms</h1>
				</ul>
			</div>

			<table className={styles.table}>
				<thead>
					<tr className={styles.tr}>
						<th className={styles.tableHeader}>Hotel name</th>
						<th className={styles.tableHeader}>Image</th>
						<th className={styles.tableHeader}>Star rating</th>
						<th className={styles.tableHeader}>Price</th>
						<th className={styles.tableHeader}>Amenities</th>
						<th className={styles.tableHeader}>View</th>
						<th className={styles.tableHeader}>Street</th>
						<th className={styles.tableHeader}>City</th>
						<th className={styles.tableHeader}>State or province</th>
						<th className={styles.tableHeader}>Hotel chain</th>
						<th className={styles.tableHeader}>Email</th>
						<th className={styles.tableHeader}>Phone</th>
						<th className={styles.tableHeader}></th>
					</tr>
				</thead>
				<tbody>
					{Array.isArray(availableHotels) &&
						availableHotels.map((hotel) => (
							<HotelRow key={hotel.id} hotel={hotel} />
						))}
				</tbody>
			</table>
			<Link href="./homePage">
				<button
					style={{ marginRight: "50px", marginLeft: "10px", marginTop: "10px" }}
					type="submit"
				>
					Back To Search
				</button>
			</Link>
		</>
	);
}
