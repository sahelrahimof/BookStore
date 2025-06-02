import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./+components/products/products.component";
import { BannerComponent } from "./+components/header/banner/banner.component";
import { MenuComponent } from "./+components/header/menu/menu.component";
import { HeaderComponent } from './+components/header/header.component';
import { FooterComponent } from "./+components/footer/footer.component";
import { PublicnavigationComponent } from "./+navigations/publicnavigation/ui/publicnavigation.component";
import { PrivatenavigationComponent } from './+navigations/privatenavigation/ui/privatenavigation.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-shop';
}
