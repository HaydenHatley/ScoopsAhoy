function EmployeesPage() {
    return (
        <>
            <h2>Employees</h2>
            <article>
                <h3></h3>
                <p></p>

                <div id="browse">
                    <p><a href="#" onClick={() => showAll()}>Display all forms</a></p>
                    <p>* = required.</p>
                    <table border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <th><a href="#" onClick={() => newEmployee()}>New</a></th>
                                <th></th>
                                <th>employeeID*</th>
                                <th>Name*</th>
                                <th>Title*</th>
                                <th>Hourly Rate ($)*</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#" onClick={() => updateEmployee('1')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteEmployee('1')}>Delete</a></td>
                                <td align="middle">1</td>
                                <td>Natasha Glaston</td>
                                <td>Manager</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateEmployee('2')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteEmployee('2')}>Delete</a></td>
                                <td align="middle">2</td>
                                <td>Nathaniel Hackett</td>
                                <td>Ice Cream Maker</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateEmployee('3')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteEmployee('3')}>Delete</a></td>
                                <td align="middle">3</td>
                                <td>James Brown</td>
                                <td>Ice Cream Scooper</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="insert">
                    <form method="POST" id="addEmployee">
                        <legend><strong>Add Employee</strong></legend>
                        <fieldset className="fields">
                            <label> Name </label> <input type="text" name="name" />
                            <label> Title </label> <input type="text" name="title" />
                            <label> Hourly Rate ($) </label> <input type="text" name="hourlyRate" />
                        </fieldset>
                        <input className="btn" type="submit" id="addEmployee" value="Add Employee" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseEmployees()} />
                    </form>
                </div>

                <div id="update">
                    <form method="POST" id="UpdateEmployee">
                        <legend><strong>Update Employee</strong></legend>
                        <fieldset className="fields">
                            <input type="hidden" name="employeeID" id="updateEmployeeID" value="1" />
                            <label> ID: </label> 1
                            <label> Name </label> <input type="text" name="name" value="Nathaniel Hackett" />
                            <label> Title </label> <input type="text" name="title" value="Ice Cream Maker" />
                            <label> Hourly Rate ($) </label>
                        </fieldset>
                        <input className="btn" type="submit" id="UpdateSaveEmployee" value="Save Update Employee" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseEmployees()} />
                    </form>
                </div>

                <div id="delete">
                    <form method="POST" id="deleteEmployee">
                        <legend><strong>Delete Employee</strong></legend>
                        <fieldset className="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <input type="hidden" name="employeeID" id="deleteemployeeID" value="1" />
                            <label><strong>ID:</strong></label> 1
                            <label><strong>Name</strong></label> Natasha Glaston
                        </fieldset>
                        <input className="btn" type="submit" id="DeleteEmployee" value="Delete Employee" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseEmployees()} />
                    </form>
                </div>
            </article>
        </>
    );
}

export default EmployeesPage;