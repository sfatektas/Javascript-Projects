import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _ = new ProductService()
console.log(_.getproducts());
_.addproduct(new Product(5,"Samsung S20",10000));
console.log(_.getproducts());
_.removeproduct(3);
console.log(_.getproducts());