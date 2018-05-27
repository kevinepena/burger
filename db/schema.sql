### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger
(
	id INT NOT NULL AUTO_INCREMENT,
	burgerName VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
