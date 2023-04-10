use ehotels;

ALTER TABLE Hotel ADD COLUMN imageUrl VARCHAR(250);
-- since I inserted 50 hotels, i starts from 1 to 50.

-- this procedure inserts url of images in hotel_images file to the url column of hotel.
SET @i = 1;
DELIMITER //
CREATE PROCEDURE update_hotel_image_url()
BEGIN
    WHILE @i <= 50 DO
       UPDATE Hotel SET imageUrl = CONCAT('hotel_images/1 (', @i, ').jpg') WHERE Hotel_ID = @i;
       SET @i = @i + 1;
    END WHILE;
END //
DELIMITER ;

CALL update_hotel_image_url();



-- checking if the url got updated.
select * from hotel;
