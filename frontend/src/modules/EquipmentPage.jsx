function EquipmentPage() {
    return (
        <>
            <h2>Equipment</h2>
            <article>
                <h3></h3>
                <p></p>

                <div id="browse">
                    <p><a href="#" onClick={() => showAll()}>Display all forms</a></p>
                    <table border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <th><a href="#" onClick={() => newEquipment()}>New</a></th>
                                <th></th>
                                <th>equipmentID</th>
                                <th>equipmentType</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#" onClick={() => updateEquipment('1')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteEquipment('1')}>Delete</a></td>
                                <td align="middle">1</td>
                                <td>Ice Cream Scoop</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateEquipment('2')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteEquipment('2')}>Delete</a></td>
                                <td align="middle">2</td>
                                <td>Ice Cream Machine</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateEquipment('3')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteEquipment('3')}>Delete</a></td>
                                <td align="middle">3</td>
                                <td>Mixer</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="insert">
                    <form method="POST" id="addEquipment">
                        <legend><strong>Add Equipment</strong></legend>
                        <fieldset className="fields">
                            <label> Equipment ID </label> <input type="text" name="equipID" />
                            <label> Equipment Type </label> <input type="text" name="equipType" />
                        </fieldset>
                        <input className="btn" type="submit" id="addEquipment" value="Add Equipment" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseEquipment()} />
                    </form>
                </div>

                <div id="update">
                    <form method="POST" id="UpdateEquipment">
                        <legend><strong>Update Equipment</strong></legend>
                        <fieldset className="fields">
                            <input type="hidden" name="equipmentID" id="updateEquipmentID" value="1" />
                            <label> equipmentID: </label> 1
                            <label> equipmentType </label> <input type="text" name="equipType" value="Ice Cream Scoop" />
                        </fieldset>
                        <input className="btn" type="submit" id="UpdateSaveEquipment" value="Save Update Equipment" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseEquipment()} />
                    </form>
                </div>

                <div id="delete">
                    <form method="POST" id="deleteEquipment">
                        <legend><strong>Delete Equipment</strong></legend>
                        <fieldset className="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <input type="hidden" name="equipmentID" id="deleteEquipmentID" value="1" />
                            <label><strong>equipmentID:</strong></label> 1
                            <label><strong>Equipment Type</strong></label> Ice Cream Scoop
                        </fieldset>
                        <input className="btn" type="submit" id="DeleteEquipment" value="Delete Equipment" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseEquipment()} />
                    </form>
                </div>
            </article>
        </>
    );
}

export default EquipmentPage;