"use strict";
exports.__esModule = true;
exports.ProductManagement = void 0;
var ProductManagement = /** @class */ (function () {
    function ProductManagement() {
        this.ListProducts = [];
    }
    ProductManagement.prototype.add = function (t) {
        this.ListProducts.push(t);
    };
    ProductManagement.prototype.edit = function (id, t) {
        var index = this.findById(+id);
        if (index === -1) {
            console.log("khong co");
        }
        else {
            this.ListProducts[index] = t;
            console.log('sua thanh cong');
        }
    };
    ProductManagement.prototype.findAll = function () {
        return this.ListProducts;
    };
    ProductManagement.prototype.remove = function (id) {
        var index = this.findById(+id);
        if (index === -1) {
            console.log('khong tim thay san pham nay');
        }
        else {
            this.ListProducts.splice(index, 1);
            console.log('xoa thanh cong');
        }
    };
    ProductManagement.prototype.findById = function (id) {
        for (var i = 0; i < this.ListProducts.length; i++) {
            if (this.ListProducts[i].id === id) {
                return i;
            }
        }
        return -1;
    };
    return ProductManagement;
}());
exports.ProductManagement = ProductManagement;
