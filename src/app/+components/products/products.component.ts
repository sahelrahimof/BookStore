import { parseHostBindings } from '@angular/compiler';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
remove($event: any) {
  this.basket=this.basket.filter(m=>m!=$event)
}
  buy($event: any) {
    this.basket.push($event);
  }

  products = [
    { id: 100, brand: "NashrGhalam", Title: "Shamstabrizi", author: "Rumi", price: 950, pic: "shamsbook.jpg" ,info:"blah blah blah"},
    { id: 101, brand: "NashrKome", Title: "Golestan", author: "saadishirazi", price: 1000, pic: "Gulistan.jpg",info:"blah blah blah333333333" },
    { id: 102, brand: " ", Title: "mantiq-al-tayr", author: "Attar of Nishapur", price: 90, pic: "Mantiq-al-tair2.jpg",info:"blah blah blahggfggggg" },
    { id: 103, brand: "NashrFerdos", Title: "Ghabosname", author: "onsor-al-maali", price: 500, pic: "ghabosname.jpg" ,info:"blah blah blahgggrrrrr"},

  ];
  basket: any[] = [];
}
