import React                        from 'react';
import { MdDeleteForever, MdEdit }  from 'react-icons/md';

function Customer( { customer, onEdit, onDelete } ) {
    return (
        <tr>
            <td>{customer.customerID}</td>
            <td>{customer.name}</td>
            <td>{customer.phone}</td>
            <td>{customer.email}</td>
            <td>{customer.dateOfBirth}</td>

            <td><MdDeleteForever onClick={() => onDelete(customer.customerID)} /></td>
           <td><MdEdit onClick={() => onEdit(customer)} /></td>
        </tr>
    );
}

export default Customer;