import { IProductService } from "./IProductService";
import { Product } from "./Product";

export class ProductDataSource {
    private _products:Product[];
    constructor() {
        this._products = new Array<Product>(
            new Product(1,"ıphone 8",6500),
            new Product(2,"ıphone X",8500),
            new Product(3,"ıphone 11",11500),
            new Product(4,"ıphone 12",13500)
            );
    }
    getproducts(): Array<Product> {
        return this._products;
    }
}