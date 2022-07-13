CREATE DATABASE cqlibrary; -- Create a Table in DATABASE'; 

-- Create a Student Table ';
CREATE TABLE student(
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR(40)
);

CREATE TABLE book(
    book_id SERIAL PRIMARY KEY,
    book_name VARCHAR(255),
    author VARCHAR(100),
    borrow_by VARCHAR(100),
    borrow_date VARCHAR(100) DEFAULT NULL,
    return_date VARCHAR(100) DEFAULT NULL
);