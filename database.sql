CREATE DATABASE cqlibrary; -- Create a Table in DATABASE'; 

-- Create a Student Table ';
CREATE TABLE student(
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20)
);

CREATE TABLE book(
    book_id SERIAL PRIMARY KEY,
    book_name VARCHAR(255),
    author VARCHAR(40),
    borrow_by VARCHAR(40),
    borrow_date DATE DEFAULT NULL,
    return_date DATE DEFAULT NULL
);