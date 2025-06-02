import { Component } from '@angular/core';
import { HeaderComponent } from "../../../+components/header/header.component";
import { FooterComponent } from "../../../+components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-publicnavigation',
  imports: [RouterOutlet],
  templateUrl: './publicnavigation.component.html',
  styleUrl: './publicnavigation.component.scss'
})
export class PublicnavigationComponent {

}
