"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var ProductDataSource_1 = require("./ProductDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new ProductDataSource_1.ProductDataSource();
        this.products = new Array();
        this.dataSource.getproducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.removeproduct = function (id) {
        var _this = this;
        this.products.forEach(function (p, index) {
            if (id == p.id) {
                _this.products.splice(index, 1);
            }
        });
    };
    ProductService.prototype.addproduct = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.getproducts = function () {
        return this.products;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
