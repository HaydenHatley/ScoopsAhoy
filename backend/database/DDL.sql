-- CREATE statements
-- 1. First, create tables with no foreign keys
CREATE TABLE Customers (
    customerID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    email VARCHAR(100),
    dateOfBirth DATE
);

CREATE TABLE Equipment (
    equipmentID INT AUTO_INCREMENT PRIMARY KEY,
    equipmentType VARCHAR(100) NOT NULL
);

CREATE TABLE Employees (
    employeeID INT AUTO_INCREMENT PRIMARY KEY,
    employeeName VARCHAR(50) NOT NULL,
    employeeTitle VARCHAR(30) NOT NULL,
    hourlyRate DECIMAL(18,2) NOT NULL
);

-- 2. Create tables  which references Equipment table
CREATE TABLE Inventory (
    inventoryID INT AUTO_INCREMENT PRIMARY KEY,
    inventoryName VARCHAR(100) NOT NULL,
    equipmentID INT NOT NULL,
    servingsRemaining INT NOT NULL,
    CONSTRAINT inv1 FOREIGN KEY (equipmentID) REFERENCES Equipment(equipmentID) ON DELETE CASCADE
);

CREATE TABLE Maintenance (
    maintenanceID INT AUTO_INCREMENT PRIMARY KEY,
    equipmentID INT NOT NULL,
    depreciation DECIMAL(18,2) DEFAULT 0,
    dateOfMaintenance DATE,
    descriptionOfMaintenance VARCHAR(250),
    maintenanceRequired VARCHAR(1) NOT NULL,
    daysUntilMaintenance INT NOT NULL,
    CONSTRAINT maint1 FOREIGN KEY (equipmentID) REFERENCES Equipment(equipmentID) ON DELETE CASCADE
);

-- 3. Create Payroll table  which references Employee table
CREATE TABLE Payroll (
    payrollID INT AUTO_INCREMENT PRIMARY KEY,
    payrollDate DATE NOT NULL,
    employeeID INT NOT NULL,
    hoursWorked DECIMAL(18,2) DEFAULT 0,
    amountPaid DECIMAL(18,2) NOT NULL,
    CONSTRAINT pay1 FOREIGN KEY (employeeID) REFERENCES Employees(employeeID) ON DELETE CASCADE
);

-- 4. Create Sales table  which references Customers & Employees tables
CREATE TABLE Sales (
    saleID INT AUTO_INCREMENT PRIMARY KEY,
    customerID INT NOT NULL DEFAULT 0,
    employeeID INT NOT NULL,
    totalSales DECIMAL(18,2) NOT NULL DEFAULT 0,
    CONSTRAINT sale_cust_id FOREIGN KEY (customerID) REFERENCES Customers(customerID) ON DELETE SET DEFAULT,
    CONSTRAINT sale_emp_id FOREIGN KEY (employeeID) REFERENCES Employees(employeeID) ON DELETE CASCADE
);

-- 5. Create Batches table  which Inventory table
CREATE TABLE Batches (
    batchID INT AUTO_INCREMENT PRIMARY KEY,
    inventoryID INT NOT NULL,
    productionDate DATE NOT NULL,
    expirationDate DATE NOT NULL,
    CONSTRAINT batch1 FOREIGN KEY (inventoryID) REFERENCES Inventory(inventoryID) ON DELETE CASCADE
);

-- 6. Create SalesInventory table  which references Sales and Inventory tables
CREATE TABLE SalesInventory (
    salesInventoryID INT AUTO_INCREMENT PRIMARY KEY,
    saleID INT NOT NULL,
    inventoryID INT NOT NULL,
    numberPurchased INT NOT NULL,
    CONSTRAINT sales_ID FOREIGN KEY (saleID) REFERENCES Sales(saleID) ON DELETE CASCADE,
    CONSTRAINT inv_ID FOREIGN KEY (inventoryID) REFERENCES Inventory(inventoryID) ON DELETE CASCADE
);

-- INSERT statements
-- 1. First, insert into tables with no foreign keys
INSERT INTO Customers (name, phone, email, dateOfBirth)
    VALUES
    ('Deleted Customer', '', '', ''),
    ('Sarah Jane','208-455-7234','sjane@gmail.com','2008-04-10'),
    ('Javier Valdez','408-773-2185','jvaldez@gmail.com','1993-08-12'),
    ('Isaac Smith','942-662-4451','ismith@yahoo.com', '2001-11-22');

INSERT INTO Equipment (equipmentType)
    VALUES
    ('Ice Cream Scoop'),
    ('Ice Cream Machine'),
    ('Mixer');

INSERT INTO Employees (employeeName, employeeTitle, hourlyRate)
    VALUES
    ('Natasha Glaston', 'Manager','35'),
    ('Nathaniel Hackett', 'Ice Cream Maker','25'),
    ('James Brown', 'Ice Cream Scooper','15');

-- 2. Then insert into Inventory (which depends on Equipment)
INSERT INTO Inventory (inventoryName, equipmentID, servingsRemaining)
    VALUES
    ('Vanilla Ice Cream', 1, 49),
    ('Chocolate Ice Cream', 1, 98),
    ('Gummy Worms', 1, 28);

-- 3. Then tables that depend on Employees
INSERT INTO Payroll (payrollDate, employeeID, hoursWorked, amountPaid)
    VALUES
    ('2024-12-01', 1, 80, 2800),
    ('2024-12-01', 2, 60, 1500),
    ('2024-11-01', 3, 40, 600);

-- 4. Then tables that depend on Equipment
INSERT INTO Maintenance (equipmentID, dateOfMaintenance, descriptionOfMaintenance, daysUntilMaintenance, maintenanceRequired)
    VALUES
    (2, '2023-10-02', 'Fixing electric connections', 100, FALSE),
    (2, '2023-08-13', 'Replacing inner machinery/parts', 75, FALSE),
    (3, '2023-10-02', 'Replacing Motor', 100, FALSE);

-- 5. Then Sales (which depends on Customers and Employees)
INSERT INTO Sales (customerID, employeeID, totalSales)
    VALUES
    (1, 3, 10),
    (2, 3, 20),
    (3, 1, 30);

-- 6. Then Batches (which depends on Inventory)
INSERT INTO Batches (inventoryID, productionDate, expirationDate)
    VALUES
    (1, '2024-12-10', '2025-01-10'),
    (2, '2024-12-12', '2025-01-12'),
    (2, '2024-12-01', '2025-01-01');

-- 7. Finally SalesInventory (which depends on both Sales and Inventory)
INSERT INTO SalesInventory (saleID, inventoryID, numberPurchased)
    VALUES
    (2, 2, 1),
    (2, 2, 2),
    (3, 1, 3);
