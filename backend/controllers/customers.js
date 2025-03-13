const db = require("../database/config");

// Returns all rows of people in bsg_people
const getCustomers = async (req, res) => {
    try {
      // Select all rows from the "Customers" table
      const query = "SELECT * FROM Customers";
      // Execute the query using the "db" object from the configuration file
      const [rows] = await db.query(query);
      // Send back the rows to the client
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching people from the database:", error);
      res.status(500).json({ error: "Error fetching customers" });
    }
  };


  // Export the functions as methods of an object
module.exports = {
    getCustomers
  };

// // CREATE controller ******************************************
// app.post ('/customers', (req,res) => { 
//     customers.createCustomer(
//         req.body.customerID, 
//         req.body.name, 
//         req.body.phone,
//         req.body.email,
//         req.body.dateOfBirth
//         )
//         .then(customer => {
//             console.log(`Customer "${customer.name}" was added to the collection.`);
//             res.status(201).json(customer);
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(400).json({ Error: 'Failed to add customer.' });
//         });
// });


// // RETRIEVE controller ****************************************************
// app.get('/customers', (req, res) => {
//     customers.retrieveCustomers()
//         .then(customers => { 
//             if (customers !== null) {
//                 console.log(`All customers were retrieved from the collection.`);
//                 res.json(customers);
//             } else {
//                 res.status(404).json({ Error: 'There are no customers to find!' });
//             }         
//          })
//         .catch(error => {
//             console.log(error);
//             res.status(400).json({ Error: 'Failed to find customers' });
//         });
// });


// // RETRIEVE by ID controller
// app.get('/customers/:id', (req, res) => {
//     customers.retrieveCustomerByID(req.params.id)
//     .then(customer => { 
//         if (customer !== null) {
//             console.log(`"Customer ${customer.name}" was retrieved, via its ID.`);
//             res.json(customer);
//         } else {
//             res.status(404).json({ Error: 'There are no customers to find.' });
//         }         
//      })
//     .catch(error => {
//         console.log(error);
//         res.status(400).json({ Error: 'No customer with that ID' });
//     });

// });


// // UPDATE controller ************************************
// app.put('/customers/:id', (req, res) => {
//     customers.updateCustomer(
//         req.params.id,
//         req.body.customerID, 
//         req.body.name, 
//         req.body.phone,
//         req.body.email,
//         req.body.dateOfBirth
//     )
//     .then(customer => {
//         console.log(`Customer "${customer.name}" details updated.`);
//         res.json(customer);
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(400).json({ Error: 'Customer details failed to update.' });
//     });
// });


// // DELETE Controller ******************************
// app.delete('/customers/:id', async (req, res) => {
//     try {
//         const success = await customers.deleteCustomerById(req.params.id);
//         if (success) {
//             console.log(`Customer ${req.params.id} was deleted.`);
//             res.status(200).send({ Success: "Customer successfully deleted." });
//         } else {
//             res.status(404).json({ Error: "Customer not found." });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ Error: "Failed to delete customer." });
//     }
// }); 

// console.log(`PORT value: ${PORT}`);
// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}...`);
// });