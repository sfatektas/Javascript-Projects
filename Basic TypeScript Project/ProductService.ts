import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { ProductDataSource } from "./ProductDataSource";

export class ProductService implements IProductService
{
    private dataSource : ProductDataSource;
    private products : Array<Product> ; 

    constructor()
    {
        this.dataSource = new ProductDataSource();
        this.products = new Array<Product>();
        this.dataSource.getproducts().forEach(p => this.products.push(p));
    }
    removeproduct(id:number): void {
        this.products.forEach((p,index) => 
            {
                if(id == p.id)
                {
                    this.products.splice(index,1);
                }
            })
    }
    addproduct(product: Product): void {
        this.products.push(product);
    }
    getproducts(): Product[] {
        return this.products;
    }

}