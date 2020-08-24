import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  product: IProduct = {
    id: 1,
    desc: 'SSD 250 gb hard drive',
    price: 75,
    avail: new Date('2016-10-03'),
    imageUrl: 'assets/ssd.jpg',
    rating: 5
  };

  showImage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
