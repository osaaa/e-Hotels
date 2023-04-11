import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

type Action = 'insert_payment' | 'check_in' | 'rent_now';
type PaymentData = {
  customer_name: string;
  ssn_sin: string;
  amount: number;
};
type CheckInData = {
  booking_id: number;
};
type RentNowData = {
  room_number: number;
  customer_name: string;
  ssn_sin: string;
};

const EmployeeHomePage = () => {
  const [selectedAction, setSelectedAction] = useState<Action>('insert_payment');
  const [paymentData, setPaymentData] = useState<PaymentData>({
    customer_name: '',
    ssn_sin: '',
    amount: 0,
  });
  const [checkInData, setCheckInData] = useState<CheckInData>({
    booking_id: 0,
  });
  const [rentNowData, setRentNowData] = useState<RentNowData>({
    room_number: 0,
    customer_name: '',
    ssn_sin: '',
  });
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response: AxiosResponse<any> | undefined;
    try {
      switch (selectedAction) {
        case 'insert_payment':
          response = await axios.post('/api/employee', {
            action: 'insert_payment',
            data: paymentData,
          });
          break;
        case 'check_in':
          response = await axios.post('/api/employee', {
            action: 'check_in',
            data: checkInData,
          });
          break;
        case 'rent_now':
          response = await axios.post('/api/employee', {
            action: 'rent_now',
            data: rentNowData,
          });
          break;
        default:
          setResult('Invalid action');
          return;
      }

      if (response?.data === 'success') {
        setResult('Action successful');
      } else {
        setResult('Action failed');
      }
    } catch (err) {
      console.error(err);
      setResult('Internal server error');
    }
  };

  return (
    <div>
      <h1>Employee Home Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Action:
          <select value={selectedAction} onChange={(e) => setSelectedAction(e.target.value as Action)}>
            <option value="insert_payment">Insert Payment</option>
            <option value="check_in">Check In</option>
            <option value="rent_now">Rent Now</option>
          </select>
        </label>
        {selectedAction === 'insert_payment' && (
          <>
            <label>
              Customer Name:
              <input type="text" value={paymentData.customer_name} onChange={(e) => setPaymentData({ ...paymentData, customer_name: e.target.value })} />
            </label>
            <label>
              SSN/SIN:
              <input type="text" value={paymentData.ssn_sin} onChange={(e) => setPaymentData({ ...paymentData, ssn_sin: e.target.value })} />
            </label>
            <label>
              Amount:
              <input type="number" value={paymentData.amount} onChange={(e) => setPaymentData({ ...paymentData, amount: parseFloat(e.target.value) })} />
            </label>
          </>
        )}
        {selectedAction === 'check_in' &&
		 (
			<label>
			  Booking ID:
			  <input type="number" value={checkInData.booking_id} onChange={(e) => setCheckInData({ ...checkInData, booking_id: parseInt(e.target.value) })} />
			</label>
		  )}
		  {selectedAction === 'rent_now' && (
			<>
			  <label>
				Room Number:
				<input type="number" value={rentNowData.room_number} onChange={(e) => setRentNowData({ ...rentNowData, room_number: parseInt(e.target.value) })} />
			  </label>
			  <label>
				Customer Name:
				<input type="text" value={rentNowData.customer_name} onChange={(e) => setRentNowData({ ...rentNowData, customer_name: e.target.value })} />
			  </label>
			  <label>
				SSN/SIN:
				<input type="text" value={rentNowData.ssn_sin} onChange={(e) => setRentNowData({ ...rentNowData, ssn_sin: e.target.value })} />
			  </label>
			</>
		  )}
		  <button type="submit">Submit</button>
		</form>
		<p>{result}</p>
	  </div>
	  );
	  };
	  
	  export default EmployeeHomePage;
