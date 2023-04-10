import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

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

export default function availableRooms() {
  const [availableHotels, setAvailableHotels] = useState<Hotel[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchRooms = async () => {
      const {
        startDate = '2023-04-09',
        endDate = '2023-04-24',
        roomCapacity = 'Double',
        hotelCategory = '4',
        priceRangeMin = '100',
        priceRangeMax = '610',
        area = 'NY',
        hotelChain = 'Hilton Worldwide',
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

