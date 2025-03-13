import React, { useState }  from 'react';
import { useNavigate }      from "react-router-dom";

export const CustomerAdd = () => {

    const [customerID,      setCustomerID]      = useState('');
    const [name,            setName]            = useState('');
    const [phone,           setPhone]           = useState('');
    const [email,           setEmail]           = useState('');
    const [dateOfBirth,     setDateOfBirth]     = useState('');

    const redirect = useNavigate();

    const addCustomer = async (event) => {
        event.preventDefault();
        const newCustomer = { customerID, name, phone, email, dateOfBirth };
        try {
            const response = await fetch('/customers', {
                method: 'post',
                body: JSON.stringify(newCustomer),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status === 201){
                alert(`Customer successfully added!`);
                redirect("/customersPage");
            } else {
                alert(`Customer successfully added!`);
            }
        } catch (error) {
            alert(`Error: customer not created, please try again or contact an administrator. Status = ${response.status}`);
        }
    };

    return (
        <>
            <h2>Add a customer</h2>
            <article>
            <p>Paragraph about this page.</p>
            <form id="" onSubmit={addCustomer} />
            <table>
                <caption>Which customer are you adding?</caption>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="customerID">Customer ID</label>
                        <input
                            type="number"
                            placeholder="Enter new Customer ID"
                            value={customerID}
                            onChange={e => setCustomerID(e.target.value)}
                            id="customerID" />
                    </td>

                    <td><label htmlFor="name">Name</label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Enter new employee's name"
                            onChange={e => setName(e.target.value)}
                            id="name" />
                    </td>

                    <td><label htmlFor="phone">Phone #</label>
                        <input
                            type="text"
                            placeholder="XXX-XXX-XXXX"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            id="phone" />
                    </td>

                    <td><label htmlFor="email">Email Address</label>
                        <input
                            type="text"
                            placeholder="example@example.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </td>

                    <td><label htmlFor="dateOfBirth">Date of Birth</label>
                        <input
                            type="text"
                            placeholder="YYYY-MM-DD"
                            value={dateOfBirth}
                            onChange={e => setDateOfBirth(e.target.value)}
                            id="dateOfBirth" />
                    </td>

                    <td><label htmlFor="submit"></label>
                        <button 
                            type="submit" 
                            onClick={addCustomer}
                            id="submit"
                            >Submit</button>
                    </td>
                </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}
export default CustomerAdd;