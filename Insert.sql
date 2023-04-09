use hotels;
INSERT INTO Hotel_chain (Chain_ID, Name, Street, City, State_or_province, Country, Postal_code, Email, Phone)
VALUES
(1, 'Marriott International', '10400 Fernwood Road', 'Bethesda', 'MD', 'USA', '20817', 'marriott@marriott.com', '301-380-3000'),
(2, 'Hilton Worldwide', '7930 Jones Branch Drive', 'McLean', 'VA', 'USA', '22102', 'hiltonworldwide@hilton.com', '703-883-1000'),
(3, 'InterContinental Hotels Group', '3 Ravinia Drive Suite 100', 'Atlanta', 'GA', 'USA', '30346', 'ihg@ihg.com', '800-621-0555'),
(4, 'Wyndham Hotels and Resorts', '22 Sylvan Way', 'Parsippany', 'NJ', 'USA', '07054', 'wyndham@wyndham.com', '973-753-6000'),
(5, 'Choice Hotels International', '1 Choice Hotels Circle Suite 400', 'Rockville', 'MD', 'USA', '20850', 'choicehotels@choicehotels.com', '301-592-5000');


--  hotels.
INSERT INTO Hotel (Hotel_ID, Chain_ID, Name, Street, City, State_or_province, Country, Postal_code, Email, Phone, Star_rating, Number_of_rooms)
VALUES
(1, 1, 'Bethesda Marriott', '5151 Pooks Hill Road', 'Bethesda', 'MD', 'USA', '20814', 'marriott@marriott.com', '301-897-9400', 3, 407),
(2, 1, 'Bethesda North Marriott Hotel & Conference Center', '5701 Marinelli Rd', 'North Bethesda', 'MD', 'USA', '20852', 'marriott@marriott.com', '301-822-9200', 4, 447),
(3, 1, 'Marriott Marquis New York', '1535 Broadway', 'New York', 'NY', 'USA', '10036', 'marriott@marriott.com', '212-398-1900', 4, 1966),
(4, 1, 'JW Marriott Essex House New York', '160 Central Park S', 'New York', 'NY', 'USA', '10019', 'marriott@marriott.com', '212-247-0300', 4, 511),
(5, 1, 'JW Marriott Los Angeles L.A. LIVE', '900 W Olympic Blvd', 'Los Angeles', 'CA', 'USA', '90015', 'marriott@marriott.com', '213-765-8600', 4, 878),
(6, 1, 'The Westin Bonaventure Hotel & Suites, Los Angeles', '404 S Figueroa St', 'Los Angeles', 'CA', 'USA', '90071', 'marriott@marriott.com', '213-624-1000', 4, 1358),
(7, 1, 'Fairfield Inn & Suites by Marriott', '7035 Arundel Mills Cir', 'Hanover', 'MD', 'USA', '21076', 'marriott@marriott.com', '410-694-9494', 3, 119),
(8, 1, 'Courtyard by Marriott Chevy Chase', '5520 Wisconsin Ave', 'Chevy Chase', 'MD', 'USA', '20815', 'marriott@marriott.com', '301-656-1500', 2, 226),
(9, 1, 'SpringHill Suites by Marriott Annapolis', '189 Admiral Cochrane Dr', 'Annapolis', 'MD', 'USA', '21401', 'marriott@marriott.com', '410-571-9980', 1, 120),
(10, 1, 'TownePlace Suites by Marriott Frederick', '5050 Westview Dr', 'Frederick', 'MD', 'USA', '21703', 'marriott@marriott.com', '301-624-0050', 1, 120);
INSERT INTO Hotel (Hotel_ID, Chain_ID, Name, Street, City, State_or_province, Country, Postal_code, Email, Phone, Star_rating, Number_of_rooms)
VALUES
(11, 2, 'Hilton McLean Tysons Corner', '7920 Jones Branch Drive', 'McLean', 'VA', 'USA', '22102', 'hiltonworldwide@hilton.com', '703-847-5000', 4, 458),
(12, 2, 'Hilton New York Midtown', '1335 Avenue of the Americas', 'New York', 'NY', 'USA', '10019', 'hiltonworldwide@hilton.com', '212-586-7000', 4, 1907),
(13, 2, 'Hilton Los Angeles Airport', '5711 W Century Blvd', 'Los Angeles', 'CA', 'USA', '90045', 'hiltonworldwide@hilton.com', '310-410-4000', 4, 1234),
(14, 2, 'Hampton Inn & Suites Annapolis', '124 Womack Drive', 'Annapolis', 'MD', 'USA', '21401', 'hiltonworldwide@hilton.com', '410-571-0200', 3, 117),
(15, 2, 'DoubleTree by Hilton Hotel Bethesda - Washington DC', '8120 Wisconsin Avenue', 'Bethesda', 'MD', 'USA', '20814', 'hiltonworldwide@hilton.com', '301-652-2000', 3, 270),
(16, 2, 'Embassy Suites by Hilton Los Angeles International Airport South', '1440 East Imperial Avenue', 'El Segundo', 'CA', 'USA', '90245', 'hiltonworldwide@hilton.com', '310-640-3600', 3, 349),
(17, 2, 'Homewood Suites by Hilton Frederick', '4950 Westview Dr', 'Frederick', 'MD', 'USA', '21703', 'hiltonworldwide@hilton.com', '301-698-2500', 3, 117),
(18, 2, 'Hilton Washington DC National Mall', "480 L'Enfant Plaza SW", 'Washington', 'DC', 'USA', '20024', 'hiltonworldwide@hilton.com', '202-484-1000', 4, 367),
(19, 2, 'Hampton Inn & Suites Los Angeles/Sherman Oaks', '5638 Sepulveda Blvd', 'Sherman Oaks', 'CA', 'USA', '91411', 'hiltonworldwide@hilton.com', '818-785-2211', 3, 96),
(20, 2, 'Home2 Suites by Hilton Annapolis', '120 Admiral Cochrane Drive', 'Annapolis', 'MD', 'USA', '21401', 'hiltonworldwide@hilton.com', '410-571-6600', 2, 100);

INSERT INTO Hotel (Hotel_ID, Chain_ID, Name, Street, City, State_or_province, Country, Postal_code, Email, Phone, Star_rating, Number_of_rooms)
VALUES
(21, 3, 'InterContinental Atlanta', '3315 Peachtree Rd NE', 'Atlanta', 'GA', 'USA', '30326', 'ihg@ihg.com', '404-946-9000', 4, 422),
(22, 3, 'Crowne Plaza Atlanta Midtown', '590 W Peachtree St NW', 'Atlanta', 'GA', 'USA', '30308', 'ihg@ihg.com', '404-877-9000', 3, 360),
(23, 3, 'Holiday Inn Atlanta Downtown', '101 Andrew Young International Blvd NW', 'Atlanta', 'GA', 'USA', '30303', 'ihg@ihg.com', '404-524-5555', 3, 260),
(24, 3, 'Staybridge Suites Atlanta Midtown', '23 Linden Ave NW', 'Atlanta', 'GA', 'USA', '30308', 'ihg@ihg.com', '404-877-9494', 3, 102),
(25, 3, 'Candlewood Suites Atlanta West I-20', '913 Bob Arnold Blvd', 'Lithia Springs', 'GA', 'USA', '30122', 'ihg@ihg.com', '770-819-9400', 2, 75),
(26, 3, 'Hotel Indigo Atlanta Midtown', '683 Peachtree St NE', 'Atlanta', 'GA', 'USA', '30308', 'ihg@ihg.com', '404-874-9200', 4, 140),
(27, 3, 'InterContinental Buckhead Atlanta', '3315 Peachtree Rd NE', 'Atlanta', 'GA', 'USA', '30326', 'ihg@ihg.com', '404-946-9000', 5, 422),
(28, 3, 'Holiday Inn Express Atlanta Downtown', '111 Cone St NW', 'Atlanta', 'GA', 'USA', '30303', 'ihg@ihg.com', '404-524-7000', 2, 130),
(29, 3, 'Even Hotel Atlanta - Midtown', '44 14th St NE', 'Atlanta', 'GA', 'USA', '30309', 'ihg@ihg.com', '678-974-4980', 3, 194),
(30, 3, 'Holiday Inn Express & Suites Atlanta East - Lithonia', '7846 Stonecrest Square', 'Lithonia', 'GA', 'USA', '30038', 'ihg@ihg.com', '770-484-9993', 2, 71);

INSERT INTO Hotel (Hotel_ID, Chain_ID, Name, Street, City, State_or_province, Country, Postal_code, Email, Phone, Star_rating, Number_of_rooms)
VALUES
(31, 4, 'Wyndham Garden Paramaribo', 'Dominee Straat 19-21', 'Paramaribo', '', 'Suriname', '', 'wyndham@wyndham.com', '+597 473200', 4, 140),
(32, 4, 'Wyndham Grand Rio Mar Puerto Rico Golf & Beach Resort', '6000 Rio Mar Blvd', 'Rio Grande', 'PR', 'USA', '00745', 'wyndham@wyndham.com', '787-888-6000', 4, 400),
(33, 4, 'Wyndham Quito Airport', 'Calle 26 y Av. El Inca, Sector Rumipamba', 'Quito', '', 'Ecuador', '', 'wyndham@wyndham.com', '+593 2-399-0800', 4, 150),
(34, 4, 'Dolce by Wyndham CampoReal Lisboa', 'Rua do Campo', 'Turcifal', '', 'Portugal', '2565-770', 'wyndham@wyndham.com', '+351 261 960 900', 5, 151),
(35, 4, 'Wyndham Tashkent', '1 Amir Temur Street', 'Tashkent', '', 'Uzbekistan', '', 'wyndham@wyndham.com', '+998 71 200 1111', 4, 206),
(36, 4, 'Wyndham Beijing North', 'No. 17 Jia, Huayuan Road', 'Beijing', '', 'China', '', 'wyndham@wyndham.com', '+86 10 8237 8888', 4, 318),
(37, 4, 'Wyndham Garden Suzhou', 'No.88 Huqiu Road', 'Suzhou', '', 'China', '', 'wyndham@wyndham.com', '+86 512 6761 8888', 4, 292),
(38, 4, 'Wyndham Grand Xiamen Haicang', 'No.39 Gangwan Road', 'Xiamen', '', 'China', '', 'wyndham@wyndham.com', '+86 592 268 6666', 5, 301),
(39, 4, 'Wyndham Grand Istanbul Europe', 'Şişli Mecidiyeköy Yolu Cad No 6', 'Istanbul', '', 'Turkey', '', 'wyndham@wyndham.com', '+90 212 375 67 00', 5, 307),
(40, 4, 'Wyndham Grand Regency Doha', 'Al Sadd Area, Sports Roundabout', 'Doha', '', 'Qatar', '', 'wyndham@wyndham.com', '+974 4434 3333', 5, 246);


INSERT INTO Hotel (Hotel_ID, Chain_ID, Name, Street, City, State_or_province, Country, Postal_code, Email, Phone, Star_rating, Number_of_rooms)
VALUES
(41, 5, 'Comfort Inn', '200 Comfort Inn Dr', 'Breezewood', 'PA', 'USA', '15533', 'choicehotels@choicehotels.com', '814-735-4341', 3, 75),
(42, 5, 'Quality Inn', '175 Beacon Hill Blvd', 'New Cumberland', 'PA', 'USA', '17070', 'choicehotels@choicehotels.com', '717-774-4800', 2, 122),
(43, 5, 'Rodeway Inn', '13015 Coastal Hwy', 'Ocean City', 'MD', 'USA', '21842', 'choicehotels@choicehotels.com', '410-250-7600', 1, 70),
(44, 5, 'Clarion Inn', '300 Meadow Ave', 'Scranton', 'PA', 'USA', '18505', 'choicehotels@choicehotels.com', '570-343-4771', 3, 115),
(45, 5, 'Econo Lodge', '4922 Hinkleville Rd', 'Paducah', 'KY', 'USA', '42001', 'choicehotels@choicehotels.com', '270-444-6750', 2, 64),
(46, 5, 'MainStay Suites', '100 Ramada Inn Dr', 'Beckley', 'WV', 'USA', '25801', 'choicehotels@choicehotels.com', '304-252-7776', 3, 83),
(47, 5, 'Sleep Inn', '3223 Lodge Dr', 'Gainesville', 'GA', 'USA', '30506', 'choicehotels@choicehotels.com', '770-534-2280', 2, 73),
(48, 5, 'Quality Inn', '345 Simpson Hwy 149', 'Magee', 'MS', 'USA', '39111', 'choicehotels@choicehotels.com', '601-849-2900', 2, 48),
(49, 5, 'Comfort Inn', '515 Roanoke Ave', 'Roanoke Rapids', 'NC', 'USA', '27870', 'choicehotels@choicehotels.com', '252-537-3141', 2, 91),
(50, 5, 'Econo Lodge', '5045 Beckley Rd', 'Battle Creek', 'MI', 'USA', '49015', 'choicehotels@choicehotels.com', '269-979-1100', 2, 62);

-- room insertion
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(1, 1, 120.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(2, 1, 150.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(3, 1, 200.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(4, 1, 250.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
(5, 1, 300.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(6, 2, 130.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(7, 2, 160.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(8, 2, 210.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(9, 2, 260.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
(10, 2, 310.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(11, 3, 150.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(12, 3, 180.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(13, 3, 230.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(14, 3, 280.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
(15, 3, 330.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(16, 4, 300.00, 'WiFi, TV, minibar', 'Single', 'No View', false, false),
(17, 4, 400.00, 'WiFi, TV, minibar, balcony', 'Double', 'Sea', true, false),
(18, 4, 500.00, 'WiFi, TV, minibar, Jacuzzi', 'Triple', 'Mountain', false, false),
(19, 4, 600.00, 'WiFi, TV, minibar, kitchenette', 'Quadruple', 'No View', false, false),
(20, 4, 800.00, 'WiFi, TV, minibar, living room, balcony', 'Suite', 'Sea', true, false),
(21, 5, 200.00, 'WiFi, TV', 'Single', 'No View', false, false),
(22, 5, 300.00, 'WiFi, TV, minibar', 'Double', 'Mountain', true, false),
(23, 5, 400.00, 'WiFi, TV, minibar, Jacuzzi', 'Triple', 'No View', false, false),
(24, 5, 500.00, 'WiFi, TV, minibar, kitchenette', 'Quadruple', 'Sea', false, false),
(25, 5, 700.00, 'WiFi, TV, minibar, living room, balcony', 'Suite', 'Mountain', true, false),
(26, 6, 250.00, 'WiFi, TV', 'Single', 'No View', false, false),
(27, 6, 350.00, 'WiFi, TV, minibar', 'Double', 'Mountain', true, false),
(28, 6, 450.00, 'WiFi, TV, minibar, Jacuzzi', 'Triple', 'No View', false, false),
(29, 6, 550.00, 'WiFi, TV, minibar, kitchenette', 'Quadruple', 'Sea', false, false),
(30, 6, 750.00, 'WiFi, TV, minibar, living room, balcony', 'Suite', 'Mountain', true, false),
(31, 7, 120.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Single', 'No View', 0, 0),
(32, 7, 140.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Double', 'No View', 0, 0),
(33, 7, 180.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Triple', 'No View', 0, 0),
(34, 7, 200.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Quadruple', 'No View', 0, 0),
(35, 7, 300.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning, Kitchenette', 'Suite', 'No View', 1, 0),
(36, 8, 150.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Single', 'No View', 0, 0),
(37, 8, 170.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Double', 'No View', 0, 0),
(38, 8, 210.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Triple', 'No View', 0, 0),
(39, 8, 240.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Quadruple', 'No View', 0, 0),
(40, 8, 360.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning, Kitchenette', 'Suite', 'No View', 1, 0),
(41, 9, 130.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Single', 'No View', 0, 0),
(42, 9, 150.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Double', 'No View', 0, 0),
(43, 9, 190.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Triple', 'No View', 0, 0),
(44, 9, 220.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning', 'Quadruple', 'No View', 0, 0),
(45, 9, 330.00, 'Free Wi-Fi, Breakfast, TV, Air Conditioning, Kitchenette', 'Suite', 'No View', 1, 0),
(46, 10, 100.00, 'Free Wi-Fi, TV, Coffee maker', 'Single', 'No View', false, false),
(47, 10, 150.00, 'Free Wi-Fi, TV, Coffee maker', 'Double', 'Mountain', false, false),
(48, 10, 200.00, 'Free Wi-Fi, TV, Coffee maker', 'Triple', 'Sea', true, false),
(49, 10, 250.00, 'Free Wi-Fi, TV, Coffee maker', 'Quadruple', 'No View', false, true),
(50, 10, 400.00, 'Free Wi-Fi, TV, Coffee maker, Mini Bar', 'Suite', 'Sea', true, false);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(51, 11, 200.00, 'TV, air conditioning, minibar', 'Double', 'Sea', FALSE, FALSE),
(52, 11, 220.00, 'TV, air conditioning, minibar', 'Double', 'Mountain', FALSE, TRUE),
(53, 11, 300.00, 'TV, air conditioning, minibar, balcony', 'Double', 'Sea', TRUE, FALSE),
(54, 11, 400.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(55, 11, 500.00, 'TV, air conditioning, minibar, kitchenette, balcony', 'Suite', 'Sea', TRUE, FALSE);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(56, 12, 150.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(57, 12, 200.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(58, 12, 250.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
(59, 12, 300.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(60, 12, 180.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(61, 13, 220.00, 'TV, air conditioning, minibar', 'Triple', 'Sea', TRUE, FALSE),
(62, 13, 270.00, 'TV, air conditioning, minibar', 'Quadruple', 'Mountain', FALSE, FALSE),
(63, 13, 320.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Mountain', TRUE, FALSE),
(64, 13, 190.00, 'TV, air conditioning, minibar', 'Single', 'No View', TRUE, FALSE),
(65, 13, 230.00, 'TV, air conditioning, minibar', 'Double', 'Sea', FALSE, FALSE);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(66, 14, 120.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(67, 14, 150.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(68, 14, 200.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(69, 14, 250.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
(70, 14, 300.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(71, 15, 130.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(72, 15, 160.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(73, 15, 210.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(74, 15, 270.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
(75, 15, 320.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, TRUE);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(76, 16, 150.00, 'TV, air conditioning, minibar', 'Double', 'No View', FALSE, FALSE),
(77, 16, 200.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(78, 16, 250.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
(79, 16, 300.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(80, 16, 130.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(81, 17, 160.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(82, 17, 210.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(83, 17, 280.00, 'TV, air conditioning, minibar, kitchenette', 'Suite', 'Sea', TRUE, FALSE),
(84, 17, 180.00, 'TV, air conditioning, minibar', 'Single', 'Mountain', FALSE, FALSE),
(85, 17, 220.00, 'TV, air conditioning, minibar', 'Double', 'Sea', FALSE, FALSE);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES 
(86, 18, 180.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(87, 18, 210.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(88, 18, 260.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, TRUE),
(89, 18, 320.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
(90, 18, 380.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(91, 19, 190.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(92, 19, 220.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(93, 19, 270.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(94, 19, 330.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
(95, 19, 390.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES 
    (96, 20, 180.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
    (97, 20, 210.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
    (98, 20, 260.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
    (99, 20, 320.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
    (100, 20, 400.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
    (101, 21, 190.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
    (102, 21, 220.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
    (103, 21, 270.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
    (104, 21, 330.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
    (105, 21, 410.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(106, 22, 130.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(107, 22, 160.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(108, 22, 210.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(109, 22, 250.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
(110, 22, 300.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(111, 23, 130.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(112, 23, 160.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(113, 23, 210.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(114, 23, 250.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
(115, 23, 300.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
  (116, 24, 100.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
  (117, 24, 130.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
  (118, 24, 180.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
  (119, 24, 230.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
  (120, 24, 280.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
  (121, 25, 110.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
  (122, 25, 140.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
  (123, 25, 190.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
  (124, 25, 240.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
  (125, 25, 290.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES 
(126, 26, 220.00, 'TV, air conditioning, minibar', 'Double', 'Sea', TRUE, FALSE),
(127, 26, 250.00, 'TV, air conditioning, minibar', 'Triple', 'No View', TRUE, TRUE),
(128, 26, 280.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', FALSE, FALSE),
(129, 26, 320.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(130, 26, 200.00, 'TV, air conditioning, minibar', 'Single', 'Mountain', TRUE, FALSE),
(131, 27, 270.00, 'TV, air conditioning, minibar', 'Double', 'Sea', FALSE, TRUE),
(132, 27, 330.00, 'TV, air conditioning, minibar', 'Triple', 'Sea', TRUE, FALSE),
(133, 27, 360.00, 'TV, air conditioning, minibar', 'Quadruple', 'No View', FALSE, FALSE),
(134, 27, 400.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(135, 27, 190.00, 'TV, air conditioning, minibar', 'Single', 'No View', TRUE, FALSE);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES 
(136, 28, 150.00, 'TV, air conditioning, minibar', 'Double', 'Sea', FALSE, FALSE),
(137, 28, 180.00, 'TV, air conditioning, minibar', 'Triple', 'No View', TRUE, FALSE),
(138, 28, 220.00, 'TV, air conditioning, minibar', 'Quadruple', 'Mountain', FALSE, FALSE),
(139, 28, 280.00, 'TV, air conditioning, minibar', 'Suite', 'Sea', TRUE, FALSE),
(140, 28, 120.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(141, 29, 150.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(142, 29, 200.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(143, 29, 250.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
(144, 29, 300.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(145, 29, 130.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
    (146, 30, 100.00, 'TV, air conditioning', 'Single', 'No View', FALSE, FALSE),
    (147, 30, 130.00, 'TV, air conditioning', 'Double', 'No View', TRUE, FALSE),
    (148, 30, 180.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, TRUE),
    (149, 30, 220.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
    (150, 30, 280.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
    (151, 31, 110.00, 'TV, air conditioning', 'Single', 'No View', FALSE, FALSE),
    (152, 31, 140.00, 'TV, air conditioning', 'Double', 'No View', TRUE, FALSE),
    (153, 31, 190.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
    (154, 31, 230.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
    (155, 31, 290.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(156, 32, 250.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(157, 32, 300.00, 'TV, air conditioning, minibar', 'Double', 'Sea', TRUE, FALSE),
(158, 32, 350.00, 'TV, air conditioning, minibar', 'Triple', 'Sea', FALSE, FALSE),
(159, 32, 400.00, 'TV, air conditioning, minibar', 'Quadruple', 'Mountain', TRUE, TRUE),
(160, 32, 450.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(161, 33, 200.00, 'TV, air conditioning, minibar', 'Single', 'Sea', FALSE, TRUE),
(162, 33, 250.00, 'TV, air conditioning, minibar', 'Double', 'Sea', TRUE, FALSE),
(163, 33, 300.00, 'TV, air conditioning, minibar', 'Triple', 'Sea', FALSE, FALSE),
(164, 33, 350.00, 'TV, air conditioning, minibar', 'Quadruple', 'Mountain', TRUE, TRUE),
(165, 33, 400.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
    (166, 34, 100.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
    (167, 34, 130.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
    (168, 34, 180.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
    (169, 34, 220.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
    (170, 34, 280.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
    (171, 35, 110.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
    (172, 35, 140.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
    (173, 35, 190.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
    (174, 35, 230.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
    (175, 35, 290.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(176, 36, 180.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(177, 36, 210.00, 'TV, air conditioning, minibar', 'Double', 'Mountain', TRUE, FALSE),
(178, 36, 260.00, 'TV, air conditioning, minibar', 'Triple', 'Sea', FALSE, FALSE),
(179, 36, 310.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Mountain', TRUE, TRUE),
(180, 36, 350.00, 'TV, air conditioning, minibar, jacuzzi, kitchen', 'Suite', 'Sea', TRUE, FALSE),
(181, 37, 190.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(182, 37, 220.00, 'TV, air conditioning, minibar', 'Double', 'Mountain', TRUE, FALSE),
(183, 37, 270.00, 'TV, air conditioning, minibar', 'Triple', 'Sea', FALSE, FALSE),
(184, 37, 320.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Mountain', TRUE, TRUE),
(185, 37, 360.00, 'TV, air conditioning, minibar, jacuzzi, kitchen', 'Suite', 'Sea', TRUE, FALSE);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
(186, 38, 120.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, FALSE),
(187, 38, 150.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(188, 38, 200.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(189, 38, 250.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, TRUE),
(190, 38, 300.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Sea', TRUE, FALSE),
(191, 39, 130.00, 'TV, air conditioning, minibar', 'Single', 'No View', FALSE, TRUE),
(192, 39, 160.00, 'TV, air conditioning, minibar', 'Double', 'No View', TRUE, FALSE),
(193, 39, 210.00, 'TV, air conditioning, minibar', 'Triple', 'Mountain', FALSE, FALSE),
(194, 39, 270.00, 'TV, air conditioning, minibar', 'Quadruple', 'Sea', TRUE, FALSE),
(195, 39, 350.00, 'TV, air conditioning, minibar, jacuzzi', 'Suite', 'Mountain', TRUE, FALSE);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
  (196, 40, 200.00, 'Wi-Fi, TV, Air conditioning', 'Double', 'Sea', true, false),
  (197, 40, 300.00, 'Balcony, TV, Air conditioning', 'Triple', 'Mountain', false, false),
  (198, 40, 100.00, 'TV, Air conditioning', 'Single', 'No View', false, false),
  (199, 40, 400.00, 'Kitchenette, Wi-Fi, TV', 'Quadruple', 'Sea', true, false),
  (200, 40, 150.00, 'TV, Air conditioning', 'Double', 'No View', false, true),
  (201, 41, 250.00, 'Balcony, Wi-Fi, TV', 'Double', 'Mountain', true, false),
  (202, 41, 350.00, 'Kitchenette, Wi-Fi, TV, Air conditioning', 'Suite', 'Sea', false, false),
  (203, 41, 180.00, 'TV, Air conditioning', 'Double', 'No View', true, false),
  (204, 41, 280.00, 'Balcony, Wi-Fi, TV, Air conditioning', 'Triple', 'Sea', true, false),
  (205, 41, 120.00, 'TV', 'Single', 'No View', false, false);

  INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
    (206, 42, 175.00, 'Free Wi-Fi, Air Conditioning, TV, Mini-Bar', 'Double', 'Sea', 1, 0),
    (207, 42, 130.00, 'Free Wi-Fi, Air Conditioning, TV', 'Single', 'No View', 0, 0),
    (208, 42, 225.00, 'Free Wi-Fi, Air Conditioning, TV, Balcony', 'Double', 'Sea', 0, 0),
    (209, 42, 190.00, 'Free Wi-Fi, Air Conditioning, TV, Mini-Bar', 'Double', 'Mountain', 1, 0),
    (210, 42, 155.00, 'Free Wi-Fi, Air Conditioning, TV', 'Single', 'No View', 0, 0),
    (211, 43, 260.00, 'Free Wi-Fi, Air Conditioning, TV, Jacuzzi', 'Suite', 'Sea', 0, 0),
    (212, 43, 205.00, 'Free Wi-Fi, Air Conditioning, TV, Mini-Bar', 'Double', 'No View', 0, 0),
    (213, 43, 165.00, 'Free Wi-Fi, Air Conditioning, TV', 'Single', 'No View', 1, 0),
    (214, 43, 250.00, 'Free Wi-Fi, Air Conditioning, TV, Balcony', 'Double', 'Sea', 0, 0),
    (215, 43, 285.00, 'Free Wi-Fi, Air Conditioning, TV, Jacuzzi', 'Suite', 'Sea', 1, 0);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem) 
VALUES 
(216, 44, 125.00, 'Wi-Fi, Air Conditioning, TV, Mini Bar', 'Double', 'Mountain', TRUE, FALSE),
(217, 44, 150.00, 'Wi-Fi, Air Conditioning, TV, Mini Bar', 'Double', 'Sea', TRUE, FALSE),
(218, 44, 200.00, 'Wi-Fi, Air Conditioning, TV, Mini Bar', 'Suite', 'Mountain', TRUE, FALSE),
(219, 44, 85.00, 'Wi-Fi, Air Conditioning, TV', 'Single', 'No View', FALSE, FALSE),
(220, 44, 100.00, 'Wi-Fi, Air Conditioning, TV', 'Single', 'No View', FALSE, FALSE),
(221, 45, 110.00, 'Wi-Fi, Air Conditioning, TV', 'Single', 'No View', FALSE, FALSE),
(222, 45, 150.00, 'Wi-Fi, Air Conditioning, TV, Mini Bar', 'Double', 'Mountain', TRUE, FALSE),
(223, 45, 175.00, 'Wi-Fi, Air Conditioning, TV, Mini Bar', 'Double', 'Sea', TRUE, FALSE),
(224, 45, 225.00, 'Wi-Fi, Air Conditioning, TV, Mini Bar', 'Suite', 'Mountain', TRUE, FALSE),
(225, 45, 85.00, 'Wi-Fi, Air Conditioning, TV', 'Single', 'No View', FALSE, FALSE);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
  (226, 46, 120.00, 'WiFi, TV, minibar', 'Single', 'No View', false, false),
  (227, 46, 150.00, 'WiFi, TV, minibar', 'Double', 'Sea', false, false),
  (228, 46, 200.00, 'WiFi, TV, minibar, balcony', 'Double', 'Sea', true, false),
  (229, 46, 80.00, 'WiFi, TV', 'Single', 'Mountain', false, false),
  (230, 46, 180.00, 'WiFi, TV, minibar', 'Triple', 'No View', false, false),
  (231, 47, 250.00, 'WiFi, TV, minibar, balcony', 'Suite', 'Sea', true, false),
  (232, 47, 90.00, 'WiFi, TV', 'Single', 'No View', false, false),
  (233, 47, 170.00, 'WiFi, TV, minibar', 'Double', 'Mountain', false, false),
  (234, 47, 220.00, 'WiFi, TV, minibar, balcony', 'Double', 'Mountain', true, false),
  (235, 47, 120.00, 'WiFi, TV, minibar', 'Single', 'Mountain', false, false);
INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem) VALUES 
(236, 48, 120.00, 'TV, WiFi, Mini Bar', 'Double', 'No View', false, false),
(237, 48, 150.00, 'TV, WiFi, Safe', 'Single', 'Sea', false, false),
(238, 48, 200.00, 'TV, WiFi, Safe, Mini Bar', 'Double', 'Mountain', true, false),
(239, 48, 180.00, 'TV, WiFi, Safe, Mini Bar', 'Double', 'Sea', false, false),
(240, 48, 250.00, 'TV, WiFi, Safe, Mini Bar', 'Suite', 'Mountain', true, false),
(241, 49, 80.00, 'TV, WiFi', 'Single', 'No View', false, false),
(242, 49, 100.00, 'TV, WiFi, Mini Bar', 'Double', 'No View', true, false),
(243, 49, 300.00, 'TV, WiFi, Safe, Mini Bar', 'Suite', 'Sea', true, false),
(244, 49, 160.00, 'TV, WiFi, Safe', 'Triple', 'Sea', false, false),
(245, 49, 120.00, 'TV, WiFi', 'Double', 'No View', false, false);

INSERT INTO Room (Room_ID, Hotel_ID, Price, Amenities, Capacity, View, Extended, Problem)
VALUES
    (246, 50, 150.00, 'Free Wi-Fi, Air Conditioning, TV', 'Double', 'Sea', true, false),
    (247, 50, 250.00, 'Free Wi-Fi, Air Conditioning, TV, Jacuzzi', 'Suite', 'Mountain', false, true),
    (248, 50, 80.00, 'Free Wi-Fi, Air Conditioning, TV', 'Single', 'No View', false, false),
    (249, 50, 180.00, 'Free Wi-Fi, Air Conditioning, TV, Balcony', 'Double', 'Mountain', true, false),
    (250, 50, 400.00, 'Free Wi-Fi, Air Conditioning, TV, Jacuzzi, Balcony', 'Suite', 'Sea', true, true);
