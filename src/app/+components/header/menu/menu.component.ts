import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  iscategoryvisible = false;

  categories() {
    this.iscategoryvisible = !this.iscategoryvisible;
  }
}
