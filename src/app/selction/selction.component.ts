import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selction',
  templateUrl: './selction.component.html',
  styleUrls: ['./selction.component.css']
})
export class SelctionComponent  {
//--------------------------selection jm a b c aevu lidhu jo number levi to selection!=string ni jgiya ae number levanu---//
  selection!: string;
changeSelection(selection : string){
 this.selection = selection
}
}
