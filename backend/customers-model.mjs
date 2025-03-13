// ************************************
// DATABASE QUERIES
// ************************************

// 🔹 CREATE: Insert a new customer
export const createCustomer = async (customerID, name, phone, email, dateOfBirth) => {
  try {
    const sql = "INSERT INTO Customers (customerID, name, phone, email, dateOfBirth) VALUES (?, ?, ?, ?, ?)";
    const [result] = await db.query(sql, [customerID, name, phone, email, dateOfBirth]);
    return { id: result.insertId, customerID, name, phone, email, dateOfBirth };
  } catch (error) {
    console.error("Error inserting customer:", error);
    throw error;
  }
};

// 🔹 RETRIEVE: Get all customers
export const retrieveCustomers = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM Customers");
    return rows;
  } catch (error) {
    console.error("Error retrieving customers:", error);
    throw error;
  }
};

// 🔹 RETRIEVE by ID
export const retrieveCustomerByID = async (id) => {
  try {
    const [rows] = await db.query("SELECT * FROM Customers WHERE customerID = ?", [id]);
    return rows.length ? rows[0] : null;
  } catch (error) {
    console.error("Error retrieving customer by ID:", error);
    throw error;
  }
};

// 🔹 UPDATE: Modify an existing customer
export const updateCustomer = async (id, customerID, name, phone, email, dateOfBirth) => {
  try {
    const sql = "UPDATE Customers SET customerID=?, name=?, phone=?, email=?, dateOfBirth=? WHERE customerID=?";
    const [result] = await db.query(sql, [customerID, name, phone, email, dateOfBirth, id]);
    
    if (result.affectedRows > 0) {
      // Fetch the updated customer with the new ID
      const [updatedRows] = await db.query("SELECT * FROM Customers WHERE customerID = ?", [customerID]);
      return updatedRows.length > 0 ? updatedRows[0] : null;
    }
    return null;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
};

// 🔹 DELETE: Remove a customer by ID
export const deleteCustomerById = async (id) => {
  try {
    const [result] = await db.query("DELETE FROM Customers WHERE customerID = ?", [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
};

// Export the database connection (optional, if needed in other files)
export { db };