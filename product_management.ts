import {Product} from "./product";
import {Imanagement} from "./imanagement";

export class ProductManagement implements Imanagement<Product> {
    public ListProducts: Product[] = [];
    add(t: Product): void {
        this.ListProducts.push(t);
    }

    edit(id: number, t: Product): void {
        let index = this.findById(+id);
        if (index === -1) {
            console.log("khong co")
        }else{
            this.ListProducts[index] = t;
            console.log('sua thanh cong')
        }
    }

    findAll(): Product[] {
        return this.ListProducts;
    }

    remove(id: number): void {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('khong tim thay san pham nay');
        }else {
            this.ListProducts.splice(index, 1);
            console.log('xoa thanh cong')
        }
    }

    findById(id: number): number{
        for (let i = 0; i < this.ListProducts.length; i++) {
            if (this.ListProducts[i].id === id) {
                return i;
            }
        }
        return -1;

    }
}