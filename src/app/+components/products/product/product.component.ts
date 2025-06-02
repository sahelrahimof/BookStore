import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: any;
  // product=input<{}>;
  @Output() onBuy=new EventEmitter<any>;
  // onBuy=output<{}>;
  @Output() onRemove=new EventEmitter<any>;
  // onRemove=output<{}>;
  @Input() action='buy';
  // action=input<('buy')>;

  buy(p: any) {
    if(this.action=='buy')
    this.onBuy.emit(p);
  else
  this.onRemove.emit(p);
  }
}
