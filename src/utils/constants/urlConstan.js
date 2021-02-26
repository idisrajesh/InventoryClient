const baseUrl = 'http://localhost:8000/api/'

const prodctUrl = {
    AddProductUrl: 'Product/AddNewProduct',
    GetALLProduct: 'Product/GetAllProducts',
    GetProductById: 'Product/GetProductById/',
    SaveEditProduct: 'Product/SaveEditProduct'
}

const WarehouseUrl = {
    AddWarehouseUrl: 'WareHouse/AddNewWareHouse',
    GetAllWarehouse: 'Warehouse/getAllWarehouse'
}

module.exports = { baseUrl, prodctUrl, WarehouseUrl }