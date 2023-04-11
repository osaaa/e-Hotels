import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const CustomerBooking = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerSsn_sin, setCustomerSsn_sin] = useState("");
  const [bookingNumber, setBookingNumber] = useState<number | undefined>(undefined);
  const [customerId, setCustomerId] = useState<number | undefined>(undefined);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);

  const router = useRouter();

  useEffect(() => {
    if (router.query.startDate && router.query.endDate) {
      setStartDate(router.query.startDate as string);
      setEndDate(router.query.endDate as string);
    }
  }, [router.query]);

  const handleBooking = async () => {
    const registrationDate = new Date().toISOString().split('T')[0]; // Modify this line
  
    const response = await fetch("/api/customerBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomId: router.query.roomId,
        name: customerName,
        ssn_sin: customerSsn_sin,
        registrationDate: registrationDate, // Use the modified variable
        checkInDate: startDate,
        checkOutDate: endDate,
      }),
    });
    const data = await response.json();
    setBookingNumber(data.bookingNumber);
    setCustomerId(data.customerId);
  };
  

  return (
    <div>
      <h1>Customer Booking</h1>
      <div>
        <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="customerSsn_sin">Customer SSN/SIN:</label>
        <input
          type="text"
          id="customerSsn_sin"
          value={customerSsn_sin}
          onChange={(e) => setCustomerSsn_sin(e.target.value)}
        />
      </div>
      <button onClick={handleBooking}>Submit Booking</button>
      {bookingNumber !== undefined && customerId !== undefined && (
        <div>
          <p>Booking Number: {bookingNumber}</p>
          <p>Customer ID: {customerId}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerBooking;
