const express = require("express");
const app = express();
const port = 3000;

const customers = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    age: 25,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    age: 30,
  },
  {
    id: 3,
    name: "Bob",
    email: "bob@example.com",
    age: 35,
  },
];

app.get("/customers", (req, res) => {
  if (!customers) res.status(404).send("No customers found");
  res.send(customers);
  res.send(customers);
});

app.get("/customers/:id", (req, res) => {
  var customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) res.status(404).send("Customer not found");
  res.send(customer);
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// explain about
// get, post, put, delete
// explain why we need postman
// explain about different status code
