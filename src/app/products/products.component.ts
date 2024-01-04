import { Component } from '@angular/core';
import productData from '../products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'Products-JSON';
  Products: any = productData; 
}
