function InventoryPage() {
    return (
        <>
            <h2>Inventory</h2>
            <article>
                <h3></h3>
                <p></p>

                <div id="browse">
                    <p><a href="#" onClick={() => showAll()}>Display all forms</a></p>
                    <table border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <th><a href="#" onClick={() => newInventory()}>New</a></th>
                                <th></th>
                                <th>Inventory ID</th>
                                <th>Inventory Name</th>
                                <th>Servings Remaining</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#" onClick={() => updateInventory('1')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteInventory('1')}>Delete</a></td>
                                <td align="middle">1</td>
                                <td>Vanilla Ice Cream</td>
                                <td> 49</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateInventory('2')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteInventory('2')}>Delete</a></td>
                                <td align="middle">2</td>
                                <td>Chocolate Ice Cream</td>
                                <td>98</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateInventory('3')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteInventory('3')}>Delete</a></td>
                                <td align="middle">3</td>
                                <td>Gummy Worms</td>
                                <td>28</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="insert">
                    <form method="POST" id="addInventory">
                        <legend><strong>Add Inventory</strong></legend>
                        <fieldset className="fields">
                            <label> Inventory ID </label> <input type="int" name="inventoryID" />
                            <label> Inventory Name </label> <input type="text" name="invName" />
                            <label> Servings Remaining ($) </label> <input type="int" name="servRemain" />
                        </fieldset>
                        <input className="btn" type="submit" id="addInventory" value="Add Inventory" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseInventory()} />
                    </form>
                </div>

                <div id="update">
                    <form method="POST" id="UpdateInventory">
                        <legend><strong>Update Inventory</strong></legend>
                        <fieldset className="fields">
                            <input type="hidden" name="inventoryID" id="updateInventoryID" value="2" />
                            <label> Inventory ID: </label> 2
                            <label> Inventory Name </label> <input type="text" name="invName" value="Chocolate Ice Cream" />
                            <label> Servings Remaining </label> <input type="int" name="servRemain" value="98" />
                        </fieldset>
                        <input className="btn" type="submit" id="UpdateSaveInventory" value="Save Update Inventory" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseInventory()} />
                    </form>
                </div>

                <div id="delete">
                    <form method="POST" id="deleteInventory">
                        <legend><strong>Delete Inventory</strong></legend>
                        <fieldset className="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <input type="hidden" name="inventoryID" id="deleteInventoryID" value="3" />
                            <label><strong>Inventory ID:</strong></label> 3
                            <label><strong>Inventory Name</strong></label> Gummy Worms
                            <label><strong>Servings Remaining</strong></label> 28
                        </fieldset>
                        <input className="btn" type="submit" id="DeleteInventory" value="Delete Inventory" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseInventory()} />
                    </form>
                </div>
            </article>
        </>
    );
}

export default InventoryPage;