CREATE VIEW rooms_per_area AS
SELECT City, State_or_province, Country, Capacity, COUNT(*) AS Available_rooms
FROM Room
JOIN Hotel ON Room.Hotel_ID = Hotel.Hotel_ID
WHERE NOT EXISTS (
  SELECT * FROM Renting
  WHERE Renting.Room_ID = Room.Room_ID AND 
  (Renting.Check_in_date <= Now() AND Renting.Check_out_date >= Now())
)
GROUP BY City, State_or_province, Country, Capacity;

CREATE OR REPLACE VIEW Hotel_Room_Capacity AS
SELECT Hotel.Name AS Hotel_Name, SUM(CASE WHEN Room.Capacity = 'Single' THEN 1
                                         WHEN Room.Capacity = 'Double' THEN 2
                                         WHEN Room.Capacity = 'Triple' THEN 3
                                         WHEN Room.Capacity = 'Quadruple' THEN 4
                                         WHEN Room.Capacity = 'Suite' THEN 5 END) AS Total_Capacity
FROM Hotel
INNER JOIN Room ON Hotel.Hotel_ID = Room.Hotel_ID
GROUP BY Hotel.Hotel_ID, Hotel.Name;
