function PayrollPage() {
    return (
        <>
            <h2>Payroll</h2>
            <article>
                <h3></h3>
                <p></p>

                <div id="browse">
                    <p><a href="#" onClick={() => showAll()}>Display all forms</a></p>
                    <table border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <th><a href="#" onClick={() => newPayroll()}>New</a></th>
                                <th></th>
                                <th>Payroll ID</th>
                                <th>Payroll Date</th>
                                <th>Employee ID</th>
                                <th>Hours Worked</th>
                                <th>Amount Paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#" onClick={() => updatePayroll('1')}>Edit</a></td>
                                <td><a href="#" onClick={() => deletePayroll('1')}>Delete</a></td>
                                <td align="middle">1</td>
                                <td>2024-12-01</td>
                                <td>1</td>
                                <td>80</td>
                                <td>2800</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updatePayroll('2')}>Edit</a></td>
                                <td><a href="#" onClick={() => deletePayroll('2')}>Delete</a></td>
                                <td align="middle">2</td>
                                <td>2024-12-01</td>
                                <td>2</td>
                                <td>60</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updatePayroll('3')}>Edit</a></td>
                                <td><a href="#" onClick={() => deletePayroll('3')}>Delete</a></td>
                                <td align="middle">3</td>
                                <td>2024-11-01</td>
                                <td>3</td>
                                <td>40</td>
                                <td>600</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="insert">
                    <form method="POST" id="addPayroll">
                        <legend><strong>Add Payroll</strong></legend>
                        <fieldset className="fields">
                            <label> Payroll Date </label> <input type="text" name="payDate" />
                            <label> Employee ID </label> <input type="text" name="empID" />
                            <label> Hours Worked </label> <input type="text" name="hrsWorked" />
                            <label> Amount Paid </label> <input type="int" name="amtPaid" />
                        </fieldset>
                        <input className="btn" type="submit" id="addPayroll" value="Add Payroll" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browsePayroll()} />
                    </form>
                </div>

                <div id="update">
                    <form method="POST" id="UpdatePayroll">
                        <legend><strong>Update Payroll</strong></legend>
                        <fieldset className="fields">
                            <input type="hidden" name="payrollID" id="updatePayrollID" value="1" />
                            <label> Payroll ID: </label> 1
                            <label> Payroll Date </label> <input type="date" name="payDate" value="2024-12-01" />
                            <label> Employee ID </label> <input type="int" name="empID" value="1" />
                            <label> Hours Worked </label> <input type="int" name="hrsWorked" value="80" />
                            <label> Amount Paid </label> <input type="int" name="amtPaid" value="2800" />
                        </fieldset>
                        <input className="btn" type="submit" id="UpdateSavePayroll" value="Save Update Payroll" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browsePayroll()} />
                    </form>
                </div>

                <div id="delete">
                    <form method="POST" id="deletePayroll">
                        <legend><strong>Delete Payroll</strong></legend>
                        <fieldset className="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <input type="hidden" name="payrollID" id="deletePayrollID" value="1" />
                            <label><strong>Payroll ID:</strong></label> 2
                            <label><strong>Payroll Date </strong></label> 2024-12-01
                            <label><strong>Employee ID </strong></label> 2
                            <label><strong>Hours Worked </strong></label> 60
                            <label><strong>Amount Paid </strong></label> 1500
                        </fieldset>
                        <input className="btn" type="submit" id="DeletePayroll" value="Delete Payroll" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browsePayroll()} />
                    </form>
                </div>
            </article>
        </>
    );
}

export default PayrollPage;