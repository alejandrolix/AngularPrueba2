import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  title = 'Mi lista de productos';
  headers = {
    desc: 'Producto',
    price: 'Precio',
    avail: 'Disponible'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
