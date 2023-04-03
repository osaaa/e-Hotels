use hotels;
INSERT INTO Hotel_chain (Chain_ID, Name, Address, Email, Phone)
VALUES
(1, 'Marriott International', '10400 Fernwood Road Bethesda, MD 20817 USA', 'marriott@marriott.com', '301-380-3000'),
(2, 'Hilton Worldwide', '7930 Jones Branch Drive McLean, VA 22102 USA', 'hiltonworldwide@hilton.com', '703-883-1000'),
(3, 'InterContinental Hotels Group', '3 Ravinia Drive Suite 100 Atlanta, GA 30346 USA', 'ihg@ihg.com', '800-621-0555'),
(4, 'Wyndham Hotels and Resorts', '22 Sylvan Way Parsippany, NJ 07054 USA', 'wyndham@wyndham.com', '973-753-6000'),
(5, 'Choice Hotels International', '1 Choice Hotels Circle Suite 400 Rockville, MD 20850 USA', 'choicehotels@choicehotels.com', '301-592-5000');

-- Marriott hotels.
INSERT INTO Hotel (Hotel_ID, Chain_ID, Name, Address, Email, Phone, Star_rating, Number_of_rooms)
VALUES
(1, 1, 'Bethesda Marriott', '5151 Pooks Hill Road Bethesda, MD 20814 USA', 'marriott@marriott.com', '301-897-9400', 3, 407),
(2, 1, 'Bethesda North Marriott Hotel & Conference Center', '5701 Marinelli Rd, North Bethesda, MD 20852 USA', 'marriott@marriott.com', '301-822-9200', 4, 447),
(3, 1, 'Marriott Marquis New York', '1535 Broadway , New York, NY 10036 USA', 'marriott@marriott.com', '212-398-1900', 4, 1966),
(4, 1, 'JW Marriott Essex House New York', '160 Central Park S, New York, NY 10019 USA', 'marriott@marriott.com', '212-247-0300', 4, 511),
(5, 1, 'JW Marriott Los Angeles L.A. LIVE', '900 W Olympic Blvd, Los Angeles, CA 90015 USA', 'marriott@marriott.com', '213-765-8600', 4, 878),
(6, 1, 'The Westin Bonaventure Hotel & Suites, Los Angeles', '404 S Figueroa St, Los Angeles, CA 90071 USA', 'marriott@marriott.com', '213-624-1000', 4, 1358),
(7, 1, 'Fairfield Inn & Suites by Marriott', '7035 Arundel Mills Cir, Hanover, MD 21076 USA', 'marriott@marriott.com', '410-694-9494', 3, 119),
(8, 1, 'Courtyard by Marriott Chevy Chase', '5520 Wisconsin Ave, Chevy Chase, MD 20815 USA', 'marriott@marriott.com', '301-656-1500', 2, 226),
(9, 1, 'SpringHill Suites by Marriott Annapolis', '189 Admiral Cochrane Dr, Annapolis, MD 21401 USA', 'marriott@marriott.com', '410-571-9980', 1, 120),
(10, 1, 'TownePlace Suites by Marriott Frederick', '5050 Westview Dr, Frederick, MD 21703 USA', 'marriott@marriott.com', '301-624-0050', 1, 120);

-- Marriott hotels room insertion
-- Bethesda Marriott
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(1, 1, 120.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(2, 1, 150.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(3, 1, 200.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(4, 1, 250.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
(5, 1, 300.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);

-- Bethesda North Marriott Hotel & Conference Center
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(6, 2, 130.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(7, 2, 160.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(8, 2, 210.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(9, 2, 260.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
(10, 2, 310.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);

-- Marriott Marquis New York
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(11, 3, 150.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(12, 3, 180.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(13, 3, 230.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(14, 3, 280.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
(15, 3, 330.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);
-- JW Marriott Essex House New York
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(16, 4, 300.00, 'WiFi, TV, minibar', 'Single', 'No View', false, false),
(17, 4, 400.00, 'WiFi, TV, minibar, balcony', 'Double', 'Sea', true, false),
(18, 4, 500.00, 'WiFi, TV, minibar, Jacuzzi', 'Triple', 'Mountain', false, false),
(19, 4, 600.00, 'WiFi, TV, minibar, kitchenette', 'Quadruple', 'No View', false, false),
(20, 4, 800.00, 'WiFi, TV, minibar, living room, balcony', 'Suite', 'Sea', true, false);

-- JW Marriott Los Angeles L.A. LIVE
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(21, 5, 200.00, 'WiFi, TV', 'Single', 'No View', false, false),
(22, 5, 300.00, 'WiFi, TV, minibar', 'Double', 'Mountain', true, false),
(23, 5, 400.00, 'WiFi, TV, minibar, Jacuzzi', 'Triple', 'No View', false, false),
(24, 5, 500.00, 'WiFi, TV, minibar, kitchenette', 'Quadruple', 'Sea', false, false),
(25, 5, 700.00, 'WiFi, TV, minibar, living room, balcony', 'Suite', 'Mountain', true, false);

-- The Westin Bonaventure Hotel & Suites, Los Angeles
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(26, 6, 250.00, 'WiFi, TV', 'Single', 'No View', false, false),
(27, 6, 350.00, 'WiFi, TV, minibar', 'Double', 'Mountain', true, false),
(28, 6, 450.00, 'WiFi, TV, minibar, Jacuzzi', 'Triple', 'No View', false, false),
(29, 6, 550.00, 'WiFi, TV, minibar, kitchenette', 'Quadruple', 'Sea', false, false),
(30, 6, 750.00, 'WiFi, TV, minibar, living room, balcony', 'Suite', 'Mountain', true, false);

-- Rooms for Fairfield Inn & Suites by Marriott
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(31, 7, 120.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Single', 'No View', 0, 0),
(32, 7, 140.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Double', 'No View', 0, 0),
(33, 7, 180.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Triple', 'No View', 0, 0),
(34, 7, 200.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Quadruple', 'No View', 0, 0),
(35, 7, 300.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning, Kitchenette', 'Suite', 'No View', 1, 0);

-- Rooms for Courtyard by Marriott Chevy Chase
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(36, 8, 150.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Single', 'No View', 0, 0),
(37, 8, 170.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Double', 'No View', 0, 0),
(38, 8, 210.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Triple', 'No View', 0, 0),
(39, 8, 240.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Quadruple', 'No View', 0, 0),
(40, 8, 360.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning, Kitchenette', 'Suite', 'No View', 1, 0);

-- Rooms for SpringHill Suites by Marriott Annapolis
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(41, 9, 130.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Single', 'No View', 0, 0),
(42, 9, 150.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Double', 'No View', 0, 0),
(43, 9, 190.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Triple', 'No View', 0, 0),
(44, 9, 220.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Quadruple', 'No View', 0, 0),
(45, 9, 330.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning, Kitchenette', 'Suite', 'No View', 1, 0);

-- TownePlace Suites by Marriott Frederick
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(46, 10, 100.00, 'Free Wi-Fi, TV, Coffee maker', 'Single', 'No View', false, false),
(47, 10, 150.00, 'Free Wi-Fi, TV, Coffee maker', 'Double', 'Mountain', false, false),
(48, 10, 200.00, 'Free Wi-Fi, TV, Coffee maker', 'Triple', 'Sea', true, false),
(49, 10, 250.00, 'Free Wi-Fi, TV, Coffee maker', 'Quadruple', 'No View', false, true),
(50, 10, 400.00, 'Free Wi-Fi, TV, Coffee maker, Mini Bar', 'Suite', 'Sea', true, false);

SELECT Room_ID, Capacity FROM Room;
