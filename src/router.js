import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboarad from './component/Dashboard/Dashboard';
import Inventory from './component/inventory/Inventory';
import Product from './component/product/Product';
import ProductAdd from './component//product/ProductAdd';
import WareHouse from './component/warehouse/WareHouse';
import AddWarehouse from './component/warehouse/AddWarehouse';

function Router(params) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Dashboard">
                    <Dashboarad />
                </Route>
                <Route path="/Inventory">
                    <Inventory />
                </Route>
                <Route path="/Product">
                    <Product />
                </Route>
                <Route path="/Warehouse">
                    <WareHouse></WareHouse>
                </Route>
                <Route path="/Add/Product">
                    <ProductAdd></ProductAdd>
                </Route>
                <Route path="/Edit/Product/:id">
                    <ProductAdd></ProductAdd>
                </Route>
                <Route path="/Add/WareHouse">
                    <AddWarehouse />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router
