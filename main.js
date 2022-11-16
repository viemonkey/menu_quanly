"use strict";
exports.__esModule = true;
var product_management_1 = require("./product_management");
var product_1 = require("./product");
var readlineSync = require('readline-sync');
var productManagement = new product_management_1.ProductManagement();
function add() {
    console.log('--------Hien thi form them moi---------');
    var id = +readlineSync.question('Enter id: ');
    var name = readlineSync.question('Enter name: ');
    var price = +readlineSync.question('Enter price: ');
    var amount = +readlineSync.question('Enter amount: ');
    var description = readlineSync.question('Enter description: ');
    var product = new product_1.Product(id, name, price, amount, description);
    productManagement.add(product);
}
function display() {
    console.log('---------Hien thi san pham-----------');
    console.log(productManagement.findAll());
}
function main() {
    var menu = "--------menu chinh--------\n    0. Thoat chuong trinh\n    1. Them san pham\n    2. Hien thi san pham\n    3. Xoa san pham\n    4. Sua san pham";
    var choice = -1;
    function editProduct() {
        console.log('---------sua san pham----------');
        var idEdit = readlineSync.question('Enter id delete: ');
        var id = +readlineSync.question('Enter id: ');
        var name = readlineSync.question('Enter name: ');
        var price = +readlineSync.question('Enter price: ');
        var amount = +readlineSync.question('Enter amount: ');
        var description = readlineSync.question('Enter description: ');
        var product = new product_1.Product(id, name, price, amount, description);
        productManagement.edit(idEdit, product);
    }
    do {
        console.log(menu);
        choice = +readlineSync.question('Enter choice: ');
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                display();
                break;
            case 3:
                deleteProduct();
                break;
            case 4:
                editProduct();
                break;
        }
    } while (choice !== 0);
}
main();
function deleteProduct() {
    var idDelete = readlineSync.question('Enter id delete: ');
    productManagement.remove(idDelete);
}
