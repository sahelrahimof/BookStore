import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailbook',
  imports: [],
  templateUrl: './detailbook.component.html',
  styleUrl: './detailbook.component.scss'
})
export class DetailbookComponent {
 @Input() product: any;
 isdetailvisible:boolean=true;
 
}
