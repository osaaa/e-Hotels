CREATE DATABASE IF NOT EXISTS Hotels;
USE Hotels;

CREATE TABLE IF NOT EXISTS Hotel_chain (
  Chain_ID INT NOT NULL PRIMARY KEY,
  Name VARCHAR(250) NOT NULL,
  Street VARCHAR(50) NOT NULL,
  City VARCHAR(50) NOT NULL,
  State_or_province VARCHAR(50) NOT NULL,
  Country VARCHAR(50) NOT NULL,
  Postal_code VARCHAR(20) NOT NULL,
  Email VARCHAR(50) NOT NULL,
  Phone VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS Hotel (
  Hotel_ID INT NOT NULL PRIMARY KEY,
  Chain_ID INT NOT NULL,
  Name VARCHAR(250) NOT NULL,
  Street VARCHAR(50) NOT NULL,
  City VARCHAR(50) NOT NULL,
  State_or_province VARCHAR(50) NOT NULL,
  Country VARCHAR(50) NOT NULL,
  Postal_code VARCHAR(20) NOT NULL,
  Email VARCHAR(50) NOT NULL,
  Phone VARCHAR(20) NOT NULL,
  Star_rating INT CHECK (Star_rating >= 1 AND Star_rating <= 5),
  Number_of_rooms INT CHECK (Number_of_rooms > 0),
  FOREIGN KEY (Chain_ID) REFERENCES Hotel_chain(Chain_ID)
);


CREATE TABLE IF NOT EXISTS Room (
  Room_ID INT NOT NULL PRIMARY KEY,
  Hotel_ID INT NOT NULL,
  Price DECIMAL(8,2) CHECK (Price>0),
  Amenities VARCHAR(100) NOT NULL,
  Capacity ENUM('Single', 'Double', 'Triple', 'Quadruple', 'Suite') NOT NULL,
  View ENUM('Sea', 'Mountain', 'No View') NOT NULL,
  Extended BOOLEAN NOT NULL,
  Problem BOOLEAN NOT NULL,
  FOREIGN KEY (Hotel_ID) REFERENCES Hotel(Hotel_ID)
);

CREATE TABLE IF NOT EXISTS Customer (
  Customer_ID INT NOT NULL PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  SSN_SIN VARCHAR(20) NOT NULL,
  Registration_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS Employee (
  Employee_ID INT NOT NULL PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Address VARCHAR(100) NOT NULL,
  SSN_SIN VARCHAR(20) NOT NULL,
  Rate DECIMAL(6,2) CHECK (Rate>0),
  Role ENUM('Manager', 'Receptionist', 'Concierge', 'Housekeeping', 'Maintenance') NOT NULL
);

CREATE TABLE IF NOT EXISTS Booking (
  Booking_ID INT NOT NULL PRIMARY KEY,
  Customer_ID INT NOT NULL,
  Room_ID INT NOT NULL,
  Check_in_date DATE NOT NULL,
  Check_out_date DATE ,
  FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID),
  FOREIGN KEY (Room_ID) REFERENCES Room(Room_ID)
);

CREATE TABLE IF NOT EXISTS Renting (
  Renting_ID INT NOT NULL PRIMARY KEY,
  Customer_ID INT NOT NULL,
  Room_ID INT NOT NULL,
  Check_in_date DATE NOT NULL,
  Check_out_date DATE ,
  Problem BOOLEAN NOT NULL,
  CONSTRAINT cannot_rent_if_problem CHECK (NOT Problem),
  FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID),
  FOREIGN KEY (Room_ID) REFERENCES Room(Room_ID)
);

CREATE TABLE IF NOT EXISTS Hotel_Manager (
  Hotel_ID INT NOT NULL,
  Employee_ID INT NOT NULL,
  PRIMARY KEY (Hotel_ID, Employee_ID),
  FOREIGN KEY (Hotel_ID) REFERENCES Hotel(Hotel_ID),
  FOREIGN KEY (Employee_ID) REFERENCES Employee(Employee_ID)
);

CREATE TABLE IF NOT EXISTS Booking_archive (
  Booking_ID INT NOT NULL PRIMARY KEY,
  Customer_ID INT NOT NULL,
  Room_ID INT NOT NULL,
  Check_in_date DATE NOT NULL,
  Check_out_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS Renting_archive (
  Renting_ID INT NOT NULL PRIMARY KEY,
  Customer_ID INT NOT NULL,
  Room_ID INT NOT NULL,
  Check_in_date DATE NOT NULL,
  Check_out_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS payments (
  payment_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(50) NOT NULL,
  ssn_sin VARCHAR(20) NOT NULL,
  amount DECIMAL(8,2) CHECK (amount > 0)
);



