-- Show all databases
SHOW databases;

-- Use database
USE BE_09;

-- Show tables of database
SHOW tables;

-- If user tables exists, remove user table
DROP TABLE IF EXISTS user;
-- Create user table
CREATE TABLE user (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userid VARCHAR(20) NOT NULL,
    name VARCHAR(10) NOT NULL,
    pw VARCHAR(20) NOT NULL
);

-- Create data into user table
INSERT INTO user (userid, name, pw) VALUES ('sean', 'sean', '1234');
INSERT INTO user (userid, name, pw) VALUES ('test', 'test', '1234');
INSERT INTO user (userid, name, pw) VALUES ('apple', 'apple', '1234');
INSERT INTO user (userid, name, pw) VALUES ('hello', 'hello', '1234');

-- Describe user table
DESC user; 

-- Read all user data
SELECT * FROM user;

-- Remove all rows that you don't need
DELETE FROM user WHERE id BETWEEN 11 AND 12;