-- School Management app

-- *************************************************


-- creating db
CREATE DATABASE school_management_db;

-- creating tables
-- user talbe
CREATE TABLE userTable (
    userId BIGSERIAL PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)

-- student table
CREATE TABLE studentTable (
    studentId BIGSERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    middleName VARCHAR(255),
    lastName VARCHAR(255) NOT NULL,
    gender VARCHAR(255) Not NULL,
    dateOfBirth DATE,
    placeOfBirth VARCHAR(255),
    hometown VARCHAR(255),
    address VARCHAR(255) NOT NULL,
    primaryLanguage VARCHAR(255) NOT NULL,
    secondaryLanguage VARCHAR(255),
    className VARCHAR(255) NOT NULL,
    enrollmentDate DATE DEFAULT CURRENT_DATE
)

-- guidien table