-- School Management app

-- *************************************************
-- creating db
CREATE DATABASE school_management_db;

-- deleting tables 
DROP TABLE IF EXISTS userTable;
DROP TABLE IF EXISTS guidienTable;
DROP TABLE IF EXISTS studentTable;
DROP TABLE IF EXISTS employmentDetail;
DROP TABLE IF EXISTS staffTable;
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
    address1 VARCHAR(255) NOT NULL,
    primaryLanguage VARCHAR(255) NOT NULL,
    secondaryLanguage VARCHAR(255),
    className VARCHAR(255) NOT NULL,
    enrollmentDate DATE DEFAULT CURRENT_DATE
)

-- guidien table
CREATE TABLE guidienTable(
    guidienId BIGSERIAL PRIMARY KEY,
    studentId INT REFERENCES studentTable(studentId),
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    address1 VARCHAR(255) NOT NULL,
    phone1 VARCHAR(100) NOT NULL,
    phone2 VARCHAR(100),
    email VARCHAR(100),
    relation VARCHAR(100) NOT NULL
)

-- staff table
CREATE TABLE staffTable(
    staffId BIGSERIAL PRIMARY KEY ,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    address1 VARCHAR(255) NOT NULL,
    phone1 VARCHAR(100),
    phone2 VARCHAR(100),
    qualification VARCHAR(255) NOT NULL
)

-- employment details
CREATE TABLE employmentDetail(
    employmentId BIGSERIAL PRIMARY KEY,
    staffId INT REFERENCES staffTable(staffId),
    dateEmployed DATE NOT NULL,
    employmentType VARCHAR(255) DEFAULT 'Permanent' NOT NULL,
    contractDuration DATE
)
-- SELECT * FROM userTable WHERE userid=10


    