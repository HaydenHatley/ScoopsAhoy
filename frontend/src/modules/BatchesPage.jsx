function BatchesPage() {
    return (
        <>
            <h2>Batches</h2>
            <article>
                <h3></h3>
                <p></p>

                <div id="browse">
                    <p><a href="#" onClick={() => showAll()}>Display all forms</a></p>
                    <table border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <th><a href="#" onClick={() => newBatch()}>New</a></th>
                                <th></th>
                                <th>batchID</th>
                                <th>inventoryID</th>
                                <th>Production Date</th>
                                <th>Expiration Date</th>
                                <th>Servings Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#" onClick={() => updateBatch('1')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteBatch('1')}>Delete</a></td>
                                <td align="middle">1</td>
                                <td align="middle">1</td>
                                <td>2024-12-10</td>
                                <td>2025-01-10</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateBatch('2')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteBatch('2')}>Delete</a></td>
                                <td align="middle">2</td>
                                <td align="middle">2</td>
                                <td>2024-12-12</td>
                                <td>2025-01-12</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateBatch('3')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteBatch('3')}>Delete</a></td>
                                <td align="middle">3</td>
                                <td align="middle">2</td>
                                <td>2024-12-01</td>
                                <td>2025-01-01</td>
                                <td>30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="insert">
                    <form method="POST" id="addBatch">
                        <legend><strong>Add Batch</strong></legend>
                        <fieldset className="fields">
                            <label> InventoryID </label> <input type="text" name="name" />
                            <label> Production Date </label> <input type="date" name="prodDate" />
                            <label> Expiration Date </label> <input type="date" name="expireDate" />
                            <label> Servings Added </label> <input type="int" name="servAdded" />
                        </fieldset>
                        <input className="btn" type="submit" id="addBatch" value="Add Batch" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseBatch()} />
                    </form>
                </div>

                <div id="update">
                    <form method="POST" id="UpdateBatch">
                        <legend><strong>Update Batch</strong></legend>
                        <fieldset className="fields">
                            <input type="hidden" name="BatchID" id="updateBatchID" value="1" />
                            <label> batchID: </label> 1
                            <label> inventoryID </label> <input type="int" name="name" value="1" />
                            <label> Production Date </label> <input type="date" name="prodDate" value="2024-12-10" />
                            <label> Expiration Date </label> <input type="date" name="expireDate" value="2025-01-10" />
                            <label> Servings Added </label> <input type="int" name="servAdded" value="50" />
                        </fieldset>
                        <input className="btn" type="submit" id="UpdateSaveBatch" value="Save Update Batch" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseBatches()} />
                    </form>
                </div>

                <div id="delete">
                    <form method="POST" id="deleteBatch">
                        <legend><strong>Delete Batch</strong></legend>
                        <fieldset className="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <input type="hidden" name="batchID" id="deleteBatchID" value="1" />
                            <label><strong>batchID:</strong></label> 3
                            <label><strong>inventoryID</strong></label> 2
                            <label><strong>Production Date</strong></label> 2024-12-01
                            <label><strong>Expiration Date</strong></label> 2025-01-01
                            <label><strong>Servings Added</strong></label> 30
                        </fieldset>
                        <input className="btn" type="submit" id="DeleteBatch" value="Delete Batch" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseBatches()} />
                    </form>
                </div>
            </article>
        </>
    );
}

export default BatchesPage;