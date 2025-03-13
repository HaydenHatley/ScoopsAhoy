function SalesPage() {
    return (
        <>
            <h2>Sales</h2>
            <article>
                <h3></h3>
                <p></p>

                <div id="browse">
                    <p><a href="#" onClick={() => showAll()}>Display all forms</a></p>
                    <table border="1" cellPadding="5">
                        <thead>
                            <tr>
                                <th><a href="#" onClick={() => newSale()}>New</a></th>
                                <th></th>
                                <th>Sale ID</th>
                                <th>Inventory ID</th>
                                <th>Customer ID</th>
                                <th>Employee ID</th>
                                <th>Number Purchased</th>
                                <th>Total Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#" onClick={() => updateSale('1')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteSale('1')}>Delete</a></td>
                                <td align="middle">1</td>
                                <td>2</td>
                                <td>1</td>
                                <td>3</td>
                                <td>1</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateSale('2')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteSale('2')}>Delete</a></td>
                                <td align="middle">2</td>
                                <td>2</td>
                                <td>2</td>
                                <td>3</td>
                                <td>1</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td><a href="#" onClick={() => updateSale('3')}>Edit</a></td>
                                <td><a href="#" onClick={() => deleteSale('3')}>Delete</a></td>
                                <td align="middle">3</td>
                                <td>1</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                                <td>30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="insert">
                    <form method="POST" id="addSale">
                        <legend><strong>Add Sale</strong></legend>
                        <fieldset className="fields">
                            <label> Sale ID </label> <input type="int" name="saleID" />
                            <label> Inventory ID </label> <input type="int" name="invID" />
                            <label> Customer ID </label> <input type="int" name="invID" />
                            <label> Employee ID </label> <input type="int" name="empID" />
                            <label> Number Purchased </label> <input type="int" name="numPurchased" />
                            <label> Total Sales </label> <input type="int" name="totSales" />
                        </fieldset>
                        <input className="btn" type="submit" id="addSale" value="Add Sale" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseSale()} />
                    </form>
                </div>

                <div id="update">
                    <form method="POST" id="UpdateSale">
                        <legend><strong>Update Sale</strong></legend>
                        <fieldset className="fields">
                            <input type="hidden" name="saleID" id="updateSaleID" value="1" />
                            <label> Sale ID: </label> 1
                            <label> Inventory ID </label> <input type="int" name="invID" value="2" />
                            <label> Customer ID </label> <input type="int" name="custID" value="1" />
                            <label> Employee ID </label> <input type="int" name="empID" value="3" />
                            <label> Number Purchased </label> <input type="int" name="numPurchased" value="1" />
                            <label> Total Sales </label> <input type="int" name="totSales" value="10" />
                        </fieldset>
                        <input className="btn" type="submit" id="UpdateSaveSale" value="Save Update Sale" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseSales()} />
                    </form>
                </div>

                <div id="delete">
                    <form method="POST" id="deleteSale">
                        <legend><strong>Delete Sale</strong></legend>
                        <fieldset className="fields">
                            <p>Are you sure you wish to delete the following?</p>
                            <input type="hidden" name="saleID" id="deleteSaleID" value="2" />
                            <label><strong>Inventory ID:</strong></label> 2
                            <label><strong>Customer ID:</strong></label> 2
                            <label><strong>Employee ID:</strong></label> 3
                            <label><strong>Number Purchased</strong></label> 1
                            <label><strong>Total Sales</strong></label> 20
                        </fieldset>
                        <input className="btn" type="submit" id="DeleteSale" value="Delete Sale" />
                        <input className="btn" type="button" value="Cancel" onClick={() => browseSales()} />
                    </form>
                </div>
            </article>
        </>
    );
}

export default SalesPage;