import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: any;
  @Output() onBuy=new EventEmitter<any>;
  @Output() onRemove=new EventEmitter<any>;
  @Input() action='buy';

  buy(p: any) {
    if(this.action=='buy')
    this.onBuy.emit(p);
  else
  this.onRemove.emit(p);
  }
}
