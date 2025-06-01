import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { BannerComponent } from "./banner/banner.component";

@Component({
  selector: 'app-header',
  imports: [MenuComponent, BannerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
