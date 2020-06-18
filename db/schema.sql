DROP DATABASE IF EXISTS recom;
CREATE DATABASE recom;

USE recom;
create table user (
    userId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
);