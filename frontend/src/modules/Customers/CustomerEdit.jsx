import React, { useState }  from 'react';
import { useNavigate }      from "react-router-dom";

export const CustomerEdit = ( { customerToEdit } ) => {
    const [customerID, setCustomerID]       = useState(customerToEdit.customerID);
    const [name, setName] = useState(customerToEdit.name);
    const [phone, setPhone] = useState(customerToEdit.phone);
    const [email, setEmail] = useState(customerToEdit.email);
    const [dateOfBirth, setDateOfBirth] = useState(customerToEdit.dateOfBirth);

    const redirect = useNavigate();

    const editCustomer = async () => {
            const response = await fetch(`/customers/${customerToEdit.customerID}`, {
                method: 'PUT',
                body: JSON.stringify({ 
                    customerID: customerID, 
                    name: name, 
                    phone: phone,
                    email: email,
                    dateOfBirth: dateOfBirth
                }),
                headers: {'Content-Type': 'application/json',},
            });

            if (response.status === 200) {
                alert(`Customer sucessfully edited`);
            } else {
                const errMessage = await response.json();
                alert(`Failed to edit customer, please try again or contact an administrator. Status: ${response.status}. ${errMessage.Error}`);
            }
            redirect("/customersPage");
        }
    return (
        <>
            <h2>Edit a customer</h2>
            <article>
                <p>Paragraph about this page.</p>
                <table>
                    <caption>Edit this Customer:</caption>
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Phone #</th>
                            <th>Email Address</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><label htmlFor="customerID"></label>
                                <input 
                                    type="number"
                                    placeholder="ID of the Customer"
                                    id="customerID"
                                    value={customerID}
                                    onChange={e => setCustomerID(e.target.value)} />
                            </td>

                            <td><label htmlFor="name"></label>
                                <input type="name"
                                placeholder="Name of the Customer"
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                            </td>

                            <td><label htmlFor="phone"></label>
                                <input 
                                    type="phone"
                                    placeholder="Customer phone number"
                                    id="phone"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)} />
                            </td>

                            <td><label htmlFor="email"></label>
                                <input 
                                    type="email"
                                    placeholder="Customer email address"
                                    id="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} />
                            </td>
                            
                            <td><label htmlFor="dateOfBirth"></label>
                                <input 
                                    type="dateOfBirth"
                                    placeholder="Customer Date of Birth"
                                    id="dateOfBirth"
                                    value={dateOfBirth}
                                    onChange={e => setDateOfBirth(e.target.value)} />
                            </td>

                            <td><label htmlFor="submit">
                                <button 
                                type="submit"
                                id="submit"
                                onClick={editCustomer}
                                >Save change</button></label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}
 export default CustomerEdit;