import { Component } from '@angular/core';
import { FooterComponent } from "../../../../+components/footer/footer.component";
import { HeaderComponent } from "../../../../+components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { PublicnavigationComponent } from '../../../../+navigations/publicnavigation/ui/publicnavigation.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
