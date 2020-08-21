import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], filterBy: string): IProduct[] {
    let filter = null;

    if (filterBy != null) {
      filter = filterBy.toLocaleLowerCase();
    }

    return filter ? products.filter((product) => product.desc.toLocaleLowerCase().includes(filter)) : products;
  }

}
