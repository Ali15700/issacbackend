CREATE DATABASE issac; -- Create a Table in DATABASE'; 

-- Create a list Table ';


CREATE TABLE list(
    order_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255),
    rider VARCHAR(100),
    order_amount VARCHAR(100),
    order_time VARCHAR(100) DEFAULT NULL,
    
);