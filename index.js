const express = require('express'); //require the library
const app = express(); // to run it
const cors = require('cors'); //require the library
const pool = require("./db");

//middleware
app.use(cors()); // it helps to interact local 5000 to interact with our local 3000
app.use(express.json()); //allow us to access the req.body(getting data from client side)

//ROUTES 12-80 STUDENTS CRUD, 82-151 Book CRUD 

//------------------------------STUDENT CRUD------------------------------------//      

//get a student list
app.get("/student", async (req, res) => {
    try {
      const studentList = await pool.query("SELECT * FROM student ORDER BY first_name ASC");
      res.json(studentList.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

// get a student
app.get("/student/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const studentid = await pool.query("SELECT * FROM student WHERE student_id = $1", [id]);
  
      res.json(studentid.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


//create a new student

app.post("/student", async (req, res) => {
    try {

        const{first_name, last_name} = req.body;
        const newStudent = await pool.query("INSERT INTO student (first_name,last_name) VALUES($1,$2) RETURNING*",
        [first_name, last_name]
        ); // RETURNING -> get the data back 
        
        
      res.json(newStudent.rows[0]); // get latest data value you added
    } catch (err) {
      console.error(err.message);
    }
  });

//update a student
app.put("/student/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { first_name, last_name} = req.body;
      const updateStudent = await pool.query(
        "UPDATE student SET first_name = $1,last_name= $2 WHERE student_id = $3",
        [first_name, last_name , id]
      );
  
      res.json("studentlist was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
//delete a student
app.delete("/student/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteStudent = await pool.query("DELETE FROM student WHERE student_id = $1", [
        id]);

      res.json("Student Detail is deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

  //------------------------------BOOK CRUD------------------------------------//  

  //get BOOK list(Read)
app.get("/book", async (req, res) => {
    try {
      const bookList = await pool.query("SELECT * FROM book ORDER BY book_name ASC");
      res.json(bookList.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

// get a book(Read)
app.get("/book/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const bookid = await pool.query("SELECT * FROM book WHERE book_id = $1", [id]);
  
      res.json(bookid.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


//(Create)Add Book Details

app.post("/book", async (req, res) => {
    try {

        const{book_name, author, borrow_by, borrow_date, return_date} = req.body;
        const newBook = await pool.query(
        "INSERT INTO book (book_name, author, borrow_by, borrow_date, return_date) VALUES($1,$2,$3,$4,$5) RETURNING*",
        [book_name, author, borrow_by, borrow_date, return_date]
        ); // RETURNING -> get the data back 
        
        
      res.json(newBook.rows[0]); // get latest data value you added
    } catch (err) {
      console.error(err.message);
    }
  });

//update a book
app.put("/book/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {borrow_by, borrow_date, return_date} = req.body;
      const updateBook = await pool.query(
        "UPDATE book SET borrow_by=$1, borrow_date=$2, return_date=$3 WHERE book_id =$4",
        [borrow_by, borrow_date, return_date,id]
      );
  
      res.json("Book list is updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
//delete a book
app.delete("/book/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteBook = await pool.query("DELETE FROM book WHERE book_id = $1", [
        id]);

      res.json("Book Detail is deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });



//Running on Server
app.listen(5000,() => { //running on server(port no.)
    console.log('listening on port 5000');
});