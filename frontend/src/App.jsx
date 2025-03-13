import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import HomePage         from './modules/HomePage.jsx';
import BatchesPage      from './modules/BatchesPage.jsx';
import EmployeesPage    from './modules/EmployeesPage.jsx';
import EquipmentPage    from './modules/EquipmentPage.jsx';
import InventoryPage    from './modules/InventoryPage.jsx';
import MaintenancePage  from './modules/MaintenancePage.jsx';
import PayrollPage      from './modules/PayrollPage.jsx';
import SalesPage        from './modules/SalesPage.jsx';
import Navigation       from './modules/Navigation.jsx';

import CustomersPage    from './modules/Customers/CustomersPage.jsx';
import CustomerAdd      from './modules/Customers/CustomerAdd.jsx';
import CustomerEdit     from './modules/Customers/CustomerEdit.jsx';

function App() {
  const [customer, setCustomer] = useState([]);

  return (
    <>
      <header>
        <h1>Scoops Ahoy!</h1>
      </header>
    
      <Router>
        <Navigation />
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>

              <Route path="/employees" element={<EmployeesPage />}></Route>
              <Route path="/equipment" element={<EquipmentPage />}></Route>
              <Route path="/batches" element={<BatchesPage />}></Route>
              <Route path="/maintenance" element={<MaintenancePage />}></Route>
              <Route path="/inventory" element={<InventoryPage />}></Route>
              <Route path="/payroll" element={<PayrollPage />}></Route>
              <Route path="/sales" element={<SalesPage />}></Route>

              <Route path="/customersPage" element={<CustomersPage setCustomer={setCustomer} />}></Route>
              <Route path="/create" element={<CustomerAdd />}></Route>
              <Route path="/update" element={<CustomerEdit customerToEdit={customer} />}></Route>

            </Routes>
          </section>
        </main>
      </Router>
      

      <footer>
        <p>&copy; {new Date().getFullYear()} Hayden Hatley & Isabelle Esler</p>
      </footer>
    </>
  )
}
export default App;
