"use strict";
exports.__esModule = true;
exports.ProductDataSource = void 0;
var Product_1 = require("./Product");
var ProductDataSource = /** @class */ (function () {
    function ProductDataSource() {
        this._products = new Array(new Product_1.Product(1, "ıphone 8", 6500), new Product_1.Product(2, "ıphone X", 8500), new Product_1.Product(3, "ıphone 11", 11500), new Product_1.Product(4, "ıphone 12", 13500));
    }
    ProductDataSource.prototype.getproducts = function () {
        return this._products;
    };
    return ProductDataSource;
}());
exports.ProductDataSource = ProductDataSource;
