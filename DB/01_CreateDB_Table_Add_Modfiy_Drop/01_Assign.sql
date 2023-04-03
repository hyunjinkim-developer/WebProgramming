use db_01;

CREATE TABLE member (
	id VARCHAR(20) NOT NULL PRIMARY KEY,
	name VARCHAR(5) NOT NULL,
    age int,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);

ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP COLUMN age;
ALTER TABLE member ADD interest VARCHAR(100);