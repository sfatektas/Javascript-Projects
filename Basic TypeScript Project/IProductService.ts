import { Product } from "./Product";

export interface IProductService
{
    addproduct(product:Product):void;
    getproducts():Array<Product>;
    removeproduct(productid:number):void;
}