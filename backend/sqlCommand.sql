CREATE DATABASE todolist;

USE todolist;

CREATE TABLE
    tasks (
        id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        status VARCHAR(255) NOT NULL,
        created_at VARCHAR(255) NOT NULL
    );

USE todolist;

CREATE TABLE
    users (
        id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at VARCHAR(255) NOT NULL
    );