import React        from 'react';
import Customer     from './Customer.jsx';

function CustomerList({ customers, onDelete, onEdit }) {
    return(
        <>
            <table id="customers">
                <caption>Add and Edit Customers</caption>
                <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
            <tbody>
                {customers.map((customer, i) => 
                    <Customer 
                        customer={customer} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
            </table>
        </>
    )
}
export default CustomerList;