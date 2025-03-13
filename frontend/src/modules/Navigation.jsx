import { Link } from 'react-router-dom';

function Navigation () {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/customersPage">Customers</Link>
            <Link to="/employees">Employees</Link>
            <Link to="/equipment">Equipment</Link>
            <Link to="/batches">Batches</Link>
            <Link to="/maintenance">Maintenance</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/payroll">Payroll</Link>
            <Link to="/sales">Sales</Link>
        </nav>
    )
}
export default Navigation;