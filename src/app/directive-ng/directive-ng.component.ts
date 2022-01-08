import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng',
  templateUrl: './directive-ng.component.html',
  styleUrls: ['./directive-ng.component.css']
})
export class DirectiveNgComponent  {

  selection!: string;
  changeSelection(selection: string){
    this.selection = selection
  }
  chooseColor: string = ''
changeColor(color: string){
this.chooseColor =  color
}

getColor(){
  const colors = {'bg-primary': this.chooseColor == 'primary', 'bg-success': this.chooseColor == 'success','bg-danger': this.chooseColor == 'danger','bg-secondary': this.chooseColor == 'secondary' }
  return colors
}

getOperation(){
  const color = {'background-color': this.chooseColor == 'primary' ? 'skyblue' : this.chooseColor == 'success' ? 'green': this.chooseColor == 'danger'? 'red' : this.chooseColor == 'secondary' ? 'gray' : ''}
  return color
}

}
