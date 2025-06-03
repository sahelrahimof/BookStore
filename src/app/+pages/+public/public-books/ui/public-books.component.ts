import { Component } from '@angular/core';
import { ProductsComponent } from "../../../../+components/products/products.component";
import { FooterComponent } from "../../../../+components/footer/footer.component";
import { HeaderComponent } from "../../../../+components/header/header.component";

@Component({
  selector: 'app-public-books',
  imports: [ProductsComponent],
  templateUrl: './public-books.component.html',
  styleUrl: './public-books.component.scss'
})
export class PublicBooksComponent {

}
