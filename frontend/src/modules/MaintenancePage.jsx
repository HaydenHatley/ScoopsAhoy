function MaintenancePage() {
    return (
        <>
            <h2>Maintenance</h2>
            <article>
                <h3></h3>
                <p></p>

                <div id="browse">
                    <p><a href="#" onClick={() => showAll()}>Display all forms</a></p>
                    <table border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <th><a href="#" onClick={() => newMaintenance()}>New</a></th>
                                <th></th>
                                <th>Maintenance ID</th>
                                <th>Equipment ID</th>
                                <th>Date of Maintenance</th>
                                <th>Description of Maintenance</th>
                                <th>Days Until Maintenance</th>
                                <th>Maintenance Required</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#" onClick={() => updateMaintenance('1')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteMaintenance('1')}>Delete</a></td>
                                <td align="middle">1</td>
                                <td>2</td>
                                <td>2023-10-02</td>
                                <td>Fixing electric connections</td>
                                <td>100</td>
                                <td>FALSE</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateMaintenance('2')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteMaintenance('2')}>Delete</a></td>
                                <td align="middle">2</td>
                                <td>2</td>
                                <td>2020-08-13</td>
                                <td>Replacing inner machinery/parts</td>
                                <td>75</td>
                                <td>FALSE</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateMaintenance('3')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteMaintenance('3')}>Delete</a></td>
                                <td align="middle">3</td>
                                <td>3</td>
                                <td>2022-06-22</td>
                                <td>Replacing Motor</td>
                                <td>83</td>
                                <td>FALSE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="insert">
                    <form method="POST" id="addMaintenance">
                        <legend><strong>Add Maintenance</strong></legend>
                        <fieldset className="fields">
                            <label> Equipment ID </label> <input type="int" name="equipID" />
                            <label> Date of Maintenance </label> <input type="date" name="maintDate" />
                            <label> Description of Maintenance </label> <input type="text" name="maintDescript" />
                            <label> Days Until Maintenance </label> <input type="int" name="maintDays" />
                            <label> Maintenance Required</label> <input type="bool" name="maintReq" />
                        </fieldset>
                        <input className="btn" type="submit" id="addMaintenance" value="Add Maintenance" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseMaintenance()} />
                    </form>
                </div>

                <div id="update">
                    <form method="POST" id="UpdateMaintenance">
                        <legend><strong>Update Maintenance</strong></legend>
                        <fieldset className="fields">
                            <input type="hidden" name="maintenanceID" id="updateMaintenanceID" value="1" />
                            <label> Maintenance ID: </label> 1
                            <label> Equipment ID: </label> 2 <input type="hidden" name="equipID" id="updateEquipID" value="2" />
                            <label> Date of Maintenance </label> <input type="text" name="name" value="2023-10-02" />
                            <label> Description of Maintenance </label> <input type="text" name="title" value="Fixing electric connections" />
                            <label> Days Until Maintenanace </label> <input type="int" name="title" value="100" />
                            <label> Maintenanace Required? </label> <input type="bool" name="maintReq" value="FALSE" />
                        </fieldset>
                        <input className="btn" type="submit" id="UpdateSaveMaintenance" value="Save Update Maintenance" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseMaintenance()} />
                    </form>
                </div>

                <div id="delete">
                    <form method="POST" id="deleteMaintenance">
                        <legend><strong>Delete Maintenance</strong></legend>
                        <fieldset className="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <input type="hidden" name="maintenanceID" id="deleteMaintenanceID" value="3" />
                            <label><strong>Maintenance ID:</strong></label> 3
                            <label><strong>Equipment ID</strong></label> 3
                            <label><strong>Date of Maintenance</strong></label> 2022-06-22
                            <label><strong>Description of Maintenance</strong></label> Replacing Motor
                            <label><strong>Days Until Maintenanace</strong></label> 83
                            <label><strong>Maintenanace Required?</strong></label> FALSE
                        </fieldset>
                        <input className="btn" type="submit" id="DeleteMaintenance" value="Delete Maintenance" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseMaintenance()} />
                    </form>
                </div>
            </article>
        </>
    );
}

export default MaintenancePage;