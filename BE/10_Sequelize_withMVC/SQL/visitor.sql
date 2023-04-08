-- Create database with Korean encoding
Create DATABASE BE_09 DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
-- Use database
use BE_09;

-- Delete table only when the table exists
DROP TABLE IF EXISTS visitor;
CREATE TABLE visitor (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

INSERT INTO visitor VALUES ("1", "홍길동", "내가 왔다.");
INSERT INTO visitor VALUES ("2", "이찬혁", "으라차차");
INSERT INTO visitor VALUES ("3", "성춘향", "안뇽!");

SELECT * FROM visitor;

-- Show all users
SELECT * FROM mysql.user;
-- Add new user
CREATE USER "user"@"%" IDENTIFIED WITH mysql_native_password BY "1234";
-- Grant prviileges to user
GRANT ALL PRIVILEGES ON *.* TO "user"@"%" WITH GRANT OPTION;
-- Remove caches, Adjust ??????
FLUSH PRIVILEGES;


