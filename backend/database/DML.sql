-- Variables expected to be filled by backend code are denoted using a colon (:) before the variable name.

--INSERT statements
-- Insert a new customer
INSERT INTO Customers (name, phone, email, dateOfBirth) 
VALUES (:nameInput, :phoneInput, :emailInput, :dateOfBirthInput);

-- Insert a new inventory item
INSERT INTO Inventory (inventoryName, equipmentID, servingsRemaining) 
VALUES (:inventoryNameInput, :equipmentIDInput, :servingsRemainingInput);

-- Insert a new employee
INSERT INTO Employees (employeeName, employeeTitle, hourlyRate) 
VALUES (:employeeNameInput, :employeeTitleInput, :hourlyRateInput);

-- Insert a new sale
INSERT INTO Sales (customerID, employeeID, totalSales) 
VALUES (:customerIDInput, :employeeIDInput, :totalSalesInput);

-- Insert into SalesInventory (M:M relationship)
INSERT INTO SalesInventory (saleID, inventoryID, numberPurchased) 
VALUES (:saleIDInput, :inventoryIDInput, :numberPurchasedInput);

-- Insert a new maintenance record
INSERT INTO Maintenance (equipmentID, depreciation, dateOfMaintenance, descriptionOfMaintenance, maintenanceRequired, daysUntilMaintenance) 
VALUES (:equipmentIDInput, :depreciationInput, :dateOfMaintenanceInput, :descriptionInput, :maintenanceRequiredInput, :daysUntilMaintenanceInput);

-- Insert a new batch
INSERT INTO Batches (inventoryID, productionDate, expirationDate) 
VALUES (:inventoryIDInput, :productionDateInput, :expirationDateInput);

-- Insert a new equipment record
INSERT INTO Equipment (equipmentType) 
VALUES (:equipmentTypeInput);

-- Insert a new payroll record
INSERT INTO Payroll (payrollDate, employeeID, hoursWorked, amountPaid) 
VALUES (:payrollDateInput, :employeeIDInput, :hoursWorkedInput, :amountPaidInput);


--SELECT statements
-- Get all customer names and details
SELECT customerID, name, phone, email, dateOfBirth FROM Customers;

-- Get all inventory names and details
SELECT inventoryID, inventoryName, equipmentID, servingsRemaining FROM Inventory;

-- Get all employee details
SELECT employeeID, employeeName, employeeTitle, hourlyRate FROM Employees;

-- Get all sales with customer and employee details
SELECT Sales.saleID, Customers.name AS customerName, Employees.employeeName AS employeeName, totalSales
FROM Sales
INNER JOIN Customers ON Sales.customerID = Customers.customerID
INNER JOIN Employees ON Sales.employeeID = Employees.employeeID;

-- Get all sales inventory details
SELECT SalesInventory.salesInventoryID, Sales.saleID, Inventory.inventoryName, SalesInventory.numberPurchased
FROM SalesInventory
INNER JOIN Sales ON SalesInventory.saleID = Sales.saleID
INNER JOIN Inventory ON SalesInventory.inventoryID = Inventory.inventoryID;

-- Get all maintenance records with equipment details
SELECT Maintenance.maintenanceID, Equipment.equipmentType, Maintenance.dateOfMaintenance, Maintenance.descriptionOfMaintenance, Maintenance.maintenanceRequired, Maintenance.daysUntilMaintenance
FROM Maintenance
INNER JOIN Equipment ON Maintenance.equipmentID = Equipment.equipmentID;

-- Get all batches with inventory details
SELECT batchID, inventoryID, productionDate, expirationDate FROM Batches;

-- Get all equipment details
SELECT equipmentID, equipmentType FROM Equipment;

-- Get all payroll records with employee details
SELECT payrollID, payrollDate, employeeID, hoursWorked, amountPaid FROM Payroll;


--UPDATE statements
-- Update an employee's hourly rate
UPDATE Employees 
SET hourlyRate = :hourlyRateInput 
WHERE employeeID = :employeeIDInput;

-- Update a maintenance record
UPDATE Maintenance 
SET descriptionOfMaintenance = :descriptionOfMaintenanceInput, maintenanceRequired = :maintenanceRequiredInput, daysUntilMaintenance = :daysUntilMaintenanceInput 
WHERE maintenanceID = :maintenanceIDInput;

--DELETE statements
-- Delete a customer
DELETE FROM Customers 
WHERE customerID = :customerIDInput;

-- Delete an inventory item
DELETE FROM Inventory 
WHERE inventoryID = :inventoryIDInput;

-- Delete from SalesInventory (M:M relationship deletion)
DELETE FROM SalesInventory 
WHERE saleID = :saleIDInput AND inventoryID = :inventoryIDInput;

-- Delete a batch
DELETE FROM Batches 
WHERE batchID = :batchIDInput;

-- Delete a maintenance record
DELETE FROM Maintenance 
WHERE maintenanceID = :maintenanceIDInput;

-- Delete an equipment record
DELETE FROM Equipment 
WHERE equipmentID = :equipmentIDInput;

-- Delete a payroll record
DELETE FROM Payroll 
WHERE payrollID = :payrollIDInput;

--dynamic dropdown searches
-- Dynamic dropdown search for customers
SELECT customerID, name FROM Customers WHERE name LIKE CONCAT('%', :searchTerm, '%');

-- Dynamic dropdown search for employees
SELECT employeeID, employeeName FROM Employees WHERE employeeName LIKE CONCAT('%', :searchTerm, '%');
