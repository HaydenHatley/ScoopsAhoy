import { React, useState, useEffect }   from 'react';
import { useNavigate }                  from 'react-router-dom';
import CustomerList                     from './CustomerList';
import { Link }                         from 'react-router-dom';
 
function CustomersPage({ setCustomer }){
    const redirect = useNavigate();

    // Use state to bring in customer data
    const [customers, setCustomers] = useState([]);

    // RETIEVE entire list of customers
    // ADD A TRY/CATCH sequence inside of loadCustomers func. "Connection to backend failed."
    const loadCustomers = async () => {
        const url = `${import.meta.env.VITE_API_URL}/customers`;
        const response = await fetch(url);
        const customers = await response.json();
        setCustomers(customers);
    }

    // UPDATE a customer
    const onEditCustomer = async customer => {
        setCustomer(customer);
        redirect("/update");
    }

    // DELETE a customer
    const onDeleteCustomer = async _id => {
        const response = await fetch(`/customers/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/customers');
            const customers = await getResponse.json();
            setCustomers(customers);
        } else {
                console.error(`Customer has been succesfully deleted = ${_id}, status code = 
                ${response.status}`)
        }
    }

    useEffect(() => {
        loadCustomers();
    }, []);

    return (
        <>
            <h2>List of Customers</h2>
            <article>
                <p>Here is a list of all your logged Customers. You can add more customers, or edit existing Customers below: </p>
                <Link to="/create">Add Customer</Link>
                <CustomerList
                    customers={customers}
                    onEdit={onEditCustomer}
                    onDelete={onDeleteCustomer}
                />
            </article>
        </>
    );
}
export default CustomersPage;