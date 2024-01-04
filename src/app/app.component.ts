import { Component } from '@angular/core';
import productsData from './products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products-JSON';
  Products: any = productsData;
  }
