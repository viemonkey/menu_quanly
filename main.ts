import { ProductManagement } from "./product_management";
import {Product} from "./product";

let readlineSync = require('readline-sync');
let productManagement = new ProductManagement();

function add() {
    console.log('--------Hien thi form them moi---------');
    let id = +readlineSync.question('Enter id: ');
    let name = readlineSync.question('Enter name: ');
    let price = +readlineSync.question('Enter price: ');
    let amount = +readlineSync.question('Enter amount: ');
    let description = readlineSync.question('Enter description: ');
    let product = new Product(id, name, price, amount, description);
    productManagement.add(product)
}

function display() {
    console.log('---------Hien thi san pham-----------')
    console.log(productManagement.findAll())
}

function main() {
    let menu = `--------menu chinh--------
    0. Thoat chuong trinh
    1. Them san pham
    2. Hien thi san pham
    3. Xoa san pham
    4. Sua san pham`
    let choice = -1

    function editProduct() {
        console.log('---------sua san pham----------')
        let idEdit = readlineSync.question('Enter id delete: ');
        let id = +readlineSync.question('Enter id: ');
        let name = readlineSync.question('Enter name: ');
        let price = +readlineSync.question('Enter price: ');
        let amount = +readlineSync.question('Enter amount: ');
        let description = readlineSync.question('Enter description: ');
        let product = new Product(id, name, price, amount, description);
        productManagement.edit(idEdit, product)
    }

    do {
        console.log(menu)
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
    }while (choice !== 0)
}
main();

function deleteProduct() {
    let idDelete = readlineSync.question('Enter id delete: ');
    productManagement.remove(idDelete);
}
