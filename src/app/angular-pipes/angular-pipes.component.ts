import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {
  name = 'shaikh'
  todaydate = new Date()
  dataObj = {
    name: 'prinkesha',
    surname:'lathidadiya',
    age:20,
    contact:7046809512,
    collegename:'s v patel'
  }
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  userList: string[] = ["User 1", "User 2", "User 3", "User 4", "User 5", "User 6", "Test", "TT"];
  includeText = "t";
  constructor() { }

  ngOnInit(): void {
  }

}
