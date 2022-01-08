import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.css']
})
export class CrudUserComponent implements OnInit {
  closeResult = '';

 

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  usersArray: any = []
  userHobbies: any = []
  users: FormGroup
  appState: any = {
    new: true,
    edit: false,
    delete: false
  }
  activeUser: any = null
  clothSize: any =['XL,L','XXL','XL']

  constructor(private modalService: NgbModal,private fb: FormBuilder, private route: Router, private activatedRoute: ActivatedRoute) {
    this.users = this.fb.group({
      name: ['', [Validators.required]],
      clothSize:['',[Validators.required]],
      userHobbies:['',[Validators.required]],
      gender:['',[Validators.required]],
      email:['',[Validators.required]],
    })
    this.usersArray = this.getLocalStorage()
    if (this.activatedRoute.snapshot.params.editId) {
      this.appState = {
        new: false,
        edit: true,
        delete: false
      }
      this.activeUser = this.usersArray.find((x: any) => x.id == this.activatedRoute.snapshot.params.editId)
      this.users.patchValue({
        name: this.activeUser.name,
        clothSize:this.activeUser.clothSize,
        userHobbies:this.activeUser.userHobbies,
        gender:this.activeUser.gender,
        email:this.activeUser.email
      })
    } else if (this.activatedRoute.snapshot.params.deleteId) {
      this.appState = {
        new: false,
        edit: false,
        delete: true
      }
      this.activeUser = this.usersArray.find((x: any) => x.id == this.activatedRoute.snapshot.params.deleteId)
    }
  }
  

  ngOnInit(): void {
  }

  navigateToDelete(id: number) {
    this.route.navigate([`users/delete/${id}`])
  }

  navigateToEdit(id: number) {
    this.route.navigate([`users/edit/${id}`])
  }


  setLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.usersArray))
  }

  getLocalStorage() {
    if (!localStorage.getItem('users')) return []
    return JSON.parse(localStorage.getItem('users') ?? '')
  }

  addUsers() {
    if (this.activeUser) {
      this.updateUser()
    }
    else {
      this.usersArray.push({
        ...this.users.value,
        id: this.usersArray.length + 1
      })
      this.setLocalStorage()
      this.users.reset()
      this.route.navigate(['/users'])
    }
  }

  updateUser() {
    this.usersArray.find((x: any) => x.id == this.activeUser.id).name = this.users.get('name')?.value
    this.setLocalStorage()
    this.users.reset()
    this.route.navigate(['/users'])
  }

  deleteUser(id: number) {
    this.usersArray = this.usersArray.filter((x: any) => x.id != id)
    this.setLocalStorage()
    this.route.navigate(['/users'])
  }



}
