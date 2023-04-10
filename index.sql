CREATE INDEX idx_room_hotel_id ON Room (Hotel_ID);

-- This index will help to speed up queries that involve 
-- filtering or joining on the Hotel_ID column in the Room 
-- table. For example, a query that retrieves all rooms that 
-- belong to a specific hotel can benefit from this index. 
-- Since the Room table is likely to be relatively large and
--  the Hotel_ID column is referenced as a foreign key, 
-- this index can significantly improve query performance.
-- SELECT * FROM Room WHERE Hotel_ID = 11;

--     Index on Booking table's Check_in_date column:
CREATE INDEX idx_booking_check_in_date ON Booking (Check_in_date);

-- This index will help to speed up queries that involve 
-- filtering or sorting by the Check_in_date column in 
-- the Booking table. For example, a query that retrieves 
-- all bookings that have a check-in date between two specific
-- dates can benefit from this index. Since the Booking table
-- is likely to have a large number of rows, this index can 
-- significantly improve query performance.

 
CREATE INDEX idx_room_price ON Room(Price);

-- This index would be useful for queries that filter or sort by room price, such as searching for all rooms within a certain price range or
-- sorting rooms by price. This index would also be useful for join operations between the Booking and Room tables based on room price.


CREATE INDEX idx_booking_customer_id ON Booking (Customer_ID);


-- This index is useful when we want to find all bookings made by a particular customer. Without this index, the database would have to 
-- perform a full table scan to find all bookings made by a particular customer. With this index, the database can quickly locate all the 
-- bookings made by the given customer_id.
