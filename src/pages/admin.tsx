// This page is for the admin to insert, delete, and update data in the database
import React, { useState, useEffect, ChangeEvent } from 'react';

interface Data {
    [key: string]: string | number | boolean;
}


const AdminPage = () => {
  const [table, setTable] = useState('Customer');
  const [action, setAction] = useState('insert');
  const [data, setData] = useState({});

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  
    // Remove empty fields from the data object
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== '')
    );
  
    let sendData = filteredData;
    if (action === "delete" || action === "update") {
      const idColumn = `${table}_ID`;
      const id = filteredData[idColumn];
      sendData = { idColumn, id };
  
      if (action === "update") {
        const updates = { ...filteredData };
        delete updates[idColumn];
        sendData = { ...sendData, updates };
      }
    }
  
    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action,
          table,
          data: sendData,
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  interface Field {
    name: string;
    label: string;
  }
  
  interface Fields {
    [key: string]: Field[];
  }
  
  const renderInputFields = () => {
    const fields: Fields = {
      Customer: [
        { name: 'Customer_ID', label: 'Customer ID' },
        { name: 'Name', label: 'Name' },
        { name: 'SSN_SIN', label: 'SSN/SIN' },
        { name: 'Registration_date', label: 'Registration Date' },
      ],
      Employee: [
        { name: 'Employee_ID', label: 'Employee ID' },
        { name: 'Name', label: 'Name' },
        { name: 'Address', label: 'Address' },
        { name: 'SSN_SIN', label: 'SSN/SIN' },
        { name: 'Rate', label: 'Rate' },
        { name: 'Role', label: 'Role' },
      ],
      Hotel: [
        { name: 'Hotel_ID', label: 'Hotel ID' },
        { name: 'Chain_ID', label: 'Chain ID' },
        { name: 'Name', label: 'Name' },
        { name: 'Street', label: 'Street' },
        { name: 'City', label: 'City' },
        { name: 'State_or_province', label: 'State or Province' },
        { name: 'Country', label: 'Country' },
        { name: 'Postal_code', label: 'Postal Code' },
        { name: 'Email', label: 'Email' },
        { name: 'Phone', label: 'Phone' },
        { name: 'Star_rating', label: 'Star Rating' },
        { name: 'Number_of_rooms', label: 'Number of Rooms' },
      ],
      Room: [
        { name: 'Room_ID', label: 'Room ID' },
        { name: 'Hotel_ID', label: 'Hotel ID' },
        { name: 'Price', label: 'Price' },
        { name: 'Amenities', label: 'Amenities' },
        { name: 'Capacity', label: 'Capacity' },
        { name: 'View', label: 'View' },
        { name: 'Extended', label: 'Extended' },
        { name: 'Problem', label: 'Problem' },
      ],
    };

    return fields[table]?.map((field, index) => {
      if (action === "delete" && !field.name.endsWith("_ID")) {
        return null;
      }
    
      return (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}:</label>
          <input
            type={field.name === 'Registration_date' ? 'date' : 'text'}
            id={field.name}
            name={field.name}
            value={data[field.name] || ''}
            onChange={handleInputChange}
            required={action !== "update" || field.name.endsWith("_ID")}
          />
        </div>
      );
    });
  };

    function handleTableChange(event: ChangeEvent<HTMLSelectElement>): void {
        const { value } = event.target;
        setTable(value);
      }
    

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="table">Table:</label>
          <select id="table" value={table} onChange={handleTableChange}>
            <option value="Customer">Customer</option>
            <option value="Employee">Employee</option>
            <option value="Hotel">Hotel</option>
            <option value="Room">Room</option>
          </select>
        </div>
        <div>
          <label htmlFor="action">Action:</label>
          <select id="action" value={action} onChange={(e) => setAction(e.target.value)}>
            <option value="insert">Insert</option>
            <option value="delete">Delete</option>
            <option value="update">Update</option>
          </select>
        </div>
        {renderInputFields()}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;