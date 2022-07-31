const express = require('express'); //require the library
const app = express(); // to run it
const cors = require('cors'); //require the library
const pool = require("./db");

//middleware
app.use(cors()); // it helps to interact local 5000 to interact with our local 3000
app.use(express.json()); //allow us to access the req.body(getting data from client side)


  //------------------------------BOOK CRUD------------------------------------//  

  //get list(Read)
app.get("/issac", async (req, res) => {
    try {
      const List = await pool.query("SELECT * FROM issac ORDER BY order_id ASC");
      res.json(List.rows);
    } catch (err) {
      console.error(err.message);
    }
  });


//(Create)Add Details

app.post("/issac", async (req, res) => {
    try {

        const{customer_name, rider, order_amount, order_time} = req.body;
        const newList = await pool.query(
        "INSERT INTO issac (customer_name, rider, order_amount, order_time) VALUES($1,$2,$3,$4,$5) RETURNING*",
        [customer_name, rider, order_amount, order_time]
        ); // RETURNING -> get the data back 
        
        
      res.json(newList.rows[0]); // get latest data value you added
    } catch (err) {
      console.error(err.message);
    }
  });

//update an order
app.put("/issac/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {customer_name, rider, order_amount, order_time} = req.body;
      const updateList = await pool.query(
        "UPDATE book SET customer_name=$1, rider=$2, order_amount=$3 ,order_time=$4 WHERE order_id =$5",
        [customer_name, rider, order_amount, order_time]
      );
  
      res.json("list is updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
//delete an order
app.delete("/issac/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteOrder = await pool.query("DELETE FROM issac WHERE order_id = $1", [
        id]);

      res.json("Order is deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });



//Running on Server
app.listen(5000,() => { //running on server(port no.)
    console.log('listening on port 5000');
});