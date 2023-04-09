#Trigger 1: When a booking is made, update the room's availability to false
CREATE TRIGGER update_room_availability
AFTER INSERT ON Booking
FOR EACH ROW
UPDATE Room
SET Availability = false
WHERE Room.Room_ID = NEW.Room_ID;

#Trigger 2: When a renting is made, update the room's availability to false and problem status to true if applicable
CREATE TRIGGER update_room_availability_and_problem
AFTER INSERT ON Renting
FOR EACH ROW
UPDATE Room
SET Availability = false, Problem = NEW.Problem
WHERE Room.Room_ID = NEW.Room_ID;

-- Trigger for checking the referential integrity constraint on Hotel_chain table
DELIMITER //
CREATE TRIGGER hotel_chain_ref_integrity
  BEFORE DELETE ON Hotel_chain
  FOR EACH ROW
  BEGIN
    IF (SELECT COUNT(*) FROM Hotel WHERE Chain_ID = OLD.Chain_ID) > 0 THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot delete the hotel chain because hotels are referencing it';
    END IF;
  END //
DELIMITER ;

-- Trigger for checking the referential integrity constraint on Hotel table
DELIMITER //
CREATE TRIGGER hotel_ref_integrity
  BEFORE DELETE ON Hotel
  FOR EACH ROW
  BEGIN
    IF (SELECT COUNT(*) FROM Room WHERE Hotel_ID = OLD.Hotel_ID) > 0 THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot delete the hotel because rooms are referencing it';
    END IF;
  END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER prevent_delete_room
BEFORE DELETE ON Room
FOR EACH ROW
BEGIN
  IF (SELECT COUNT(*) FROM Booking WHERE Room_ID = OLD.Room_ID) > 0 THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Cannot delete room with associated booking';
  END IF;
  IF (SELECT COUNT(*) FROM Renting WHERE Room_ID = OLD.Room_ID) > 0 THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Cannot delete room with associated renting';
  END IF;
END //
DELIMITER ;


DELIMITER //
CREATE TRIGGER `booking_ins` BEFORE INSERT ON `Booking`
FOR EACH ROW
BEGIN
  DECLARE room_count INT;
  DECLARE rent_count INT;
  
  SELECT COUNT(*) INTO room_count FROM Room WHERE Room_ID = NEW.Room_ID;
  SELECT COUNT(*) INTO rent_count FROM Renting WHERE Room_ID = NEW.Room_ID AND (NEW.Check_in_date BETWEEN Check_in_date AND Check_out_date OR NEW.Check_out_date BETWEEN Check_in_date AND Check_out_date);
  
  IF (room_count = 0) THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Booking Failed: Room does not exist.';
  ELSEIF (rent_count > 0) THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Booking Failed: Room is already rented during this time period.';
  END IF;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER prevent_insert_renting
BEFORE INSERT ON Renting
FOR EACH ROW
BEGIN
  IF (SELECT Problem FROM Room WHERE Room_ID = NEW.Room_ID) = TRUE THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Cannot insert renting with room that has a problem';
  END IF;
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER enforce_hotel_manager_ref_integrity
BEFORE INSERT ON Hotel_Manager
FOR EACH ROW
BEGIN
    IF (SELECT COUNT(*) FROM Hotel WHERE Hotel_ID = NEW.Hotel_ID) = 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Invalid hotel ID in Hotel_Manager table';
    END IF;
    
    IF (SELECT COUNT(*) FROM Employee WHERE Employee_ID = NEW.Employee_ID) = 0 THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Invalid employee ID in Hotel_Manager table';
    END IF;
END //
DELIMITER ;

-- Trigger for archiving the rows from Booking table when a corresponding row in Booking table is updated
DELIMITER //
CREATE TRIGGER archive_booking_on_booking_update
  AFTER UPDATE ON Booking
  FOR EACH ROW
  BEGIN
    INSERT INTO Booking_archive (Booking_ID, Customer_ID, Room_ID, Check_in_date, Check_out_date)
    VALUES (OLD.Booking_ID, OLD.Customer_ID, OLD.Room_ID, OLD.Check_in_date, OLD.Check_out_date);
  END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER prevent_insert_hotel
BEFORE INSERT ON Hotel
FOR EACH ROW
BEGIN
  IF (SELECT COUNT(*) FROM Hotel_chain WHERE Chain_ID = NEW.Chain_ID) = 0 THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Cannot insert hotel with non-existing chain ID';
  END IF;
END //
DELIMITER ;

-- Trigger for updating the booking archive when a booking is deleted
DELIMITER //
CREATE TRIGGER booking_delete_trigger
AFTER DELETE ON Booking
FOR EACH ROW
BEGIN
INSERT INTO Booking_archive (Booking_ID, Customer_ID, Room_ID, Check_in_date, Check_out_date)
VALUES (OLD.Booking_ID, OLD.Customer_ID, OLD.Room_ID, OLD.Check_in_date, OLD.Check_out_date);
END // 
DELIMITER ;

-- Trigger for updating the renting archive when a renting is deleted
DELIMITER //
CREATE TRIGGER renting_delete_trigger
AFTER DELETE ON Renting
FOR EACH ROW
BEGIN
INSERT INTO Renting_archive (Renting_ID, Customer_ID, Room_ID, Check_in_date, Check_out_date)
VALUES (OLD.Renting_ID, OLD.Customer_ID, OLD.Room_ID, OLD.Check_in_date, OLD.Check_out_date);
END //
DELIMITER ;


-- Trigger for updating the booking archive when a booking is updated
DELIMITER //
CREATE TRIGGER booking_update_trigger
AFTER UPDATE ON Booking
FOR EACH ROW
BEGIN
IF NEW.Room_ID != OLD.Room_ID THEN
INSERT INTO Booking_archive (Booking_ID, Customer_ID, Room_ID, Check_in_date, Check_out_date)
VALUES (OLD.Booking_ID, OLD.Customer_ID, OLD.Room_ID, OLD.Check_in_date, OLD.Check_out_date);
END IF;
END //
DELIMITER ;

-- Trigger for updating the renting archive when a renting is updated
DELIMITER //
CREATE TRIGGER renting_update_trigger
AFTER UPDATE ON Renting
FOR EACH ROW
BEGIN
IF NEW.Room_ID != OLD.Room_ID THEN
INSERT INTO Renting_archive (Renting_ID, Customer_ID, Room_ID, Check_in_date, Check_out_date)
VALUES (OLD.Renting_ID, OLD.Customer_ID, OLD.Room_ID, OLD.Check_in_date, OLD.Check_out_date);
END IF;
END //
DELIMITER ;

-- Trigger for preventing deletion of employees with associated managers
DELIMITER //
CREATE TRIGGER employee_delete_trigger
BEFORE DELETE ON Employee
FOR EACH ROW
BEGIN
IF EXISTS (SELECT 1 FROM Hotel_Manager WHERE Employee_ID = OLD.Employee_ID) THEN
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot delete employee with associated hotel manager roles.';
END IF;
END //
DELIMITER ;

-- Create a trigger that prevents Customer records from being deleted if there are associated Booking or Renting records
DELIMITER //
CREATE TRIGGER trg_Customer_Check_Booking_Renting BEFORE DELETE ON Customer
FOR EACH ROW
BEGIN
DECLARE booking_count INT;
DECLARE renting_count INT;
SELECT COUNT(*) INTO booking_count FROM Booking WHERE Customer_ID = OLD.Customer_ID;
SELECT COUNT(*) INTO renting_count FROM Renting WHERE Customer_ID = OLD.Customer_ID;
IF booking_count > 0 OR renting_count > 0 THEN
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot delete Customer record because there are associated Booking or Renting records.';
END IF;
END //
DELIMITER ;

-- Create a trigger that prevents Room records from being updated to reference non-existent Hotel records
DELIMITER //
CREATE TRIGGER trg_Room_Check_Hotel_References BEFORE UPDATE ON Room
FOR EACH ROW
BEGIN
DECLARE hotel_count INT;
SELECT COUNT(*) INTO hotel_count FROM Hotel WHERE Hotel_ID = NEW.Hotel_ID;
IF hotel_count = 0 THEN
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot update Room record because the referenced Hotel does not exist.';
END IF;
END //
DELIMITER ;

-- Create a trigger that prevents Booking records from being updated to reference non-existent Customer or Room records
DELIMITER //
CREATE TRIGGER trg_Booking_Check_References BEFORE UPDATE ON Booking
FOR EACH ROW
BEGIN
DECLARE customer_count INT;
DECLARE room_count INT;
SELECT COUNT(*) INTO customer_count FROM Customer WHERE Customer_ID = NEW.Customer_ID;
SELECT COUNT(*) INTO room_count FROM Room WHERE Room_ID = NEW.Room_ID;
IF customer_count = 0 OR room_count = 0 THEN
SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot update Booking record because the referenced Customer or Room does not exist.';
END IF;
END //
DELIMITER ;







