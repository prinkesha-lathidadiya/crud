import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roleData: any = []
  editRoleInfo: any = null
  role: FormGroup
  // userHobbies: any = []
  
  
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.role = this.fb.group({
      roleName: [''],
      isActive:[''],
    })
  }

  // updateHobby($event: any) {
  //   if (this.userHobbies.find((x: any) => x == $event.target.value)) {
  //     this.userHobbies = this.userHobbies.filter((x: any) => x != $event.target.value)
  //   } else {
  //     this.userHobbies.push($event.target.value)
  //   }
  //   console.log(this.userHobbies)
  // }

  ngOnInit(): void {
    this.getrole()
  }

  getrole() {
    this.http.get(`${environment.apiEndPoints}/api/Role/GetAllRoles`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEwOSIsIlVzZXJOYW1lIjoic3RyaW5nIiwiVGVuYW50SWQiOiIxIiwiUm9sZSI6ImNvbXBhbnlzZHMiLCJSb2xlSWQiOiIyIiwiRW1wbG95ZWVJZCI6IjAiLCJDb21wYW55SWQiOiIwIiwibmJmIjoxNjQxNDY3ODE4LCJleHAiOjE2NDE1NTQyMTgsImlhdCI6MTY0MTQ2NzgxOH0.Uy5I_RWfNL809xo7UuUKHMctyYo-76GxKLI-qBgZH3M'
      }
    }).subscribe((res: any) => {
      this.roleData = res.responseData
    })
  }

  deleteRole(id: number) {
    this.http.delete(`${environment.apiEndPoints}/api/Role/DeleteRole?id=${id}`).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Data deleted successfully')
        this.getrole()
      } else {
        alert(res.message)
      }
    })
  }

  updateRole() {
    this.http.post(`${environment.apiEndPoints}/api/Role/CreateOrUpdateRole`, {
      ...this.editRoleInfo,
      id: this.editRoleInfo.id,
      ...this.role.value
    }).subscribe((res: any) => {
      if (res.isSuccess) {
        this.editRoleInfo = null
        alert('Data updated successfully')
        this.role.reset()
        this.getrole()
      } else {
        alert(res.message)
      }
    })
  }




  addRole() {
    if (this.editRoleInfo) {
      this.updateRole()
      return
    }
    this.http.post(`${environment.apiEndPoints}/api/Role/GetActiveRoles`, this.role.value).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Data added successfully')
        this.role.reset()
        this.getrole()
      } else {
        alert(res.message)
      }
    })
  }

  editRole(role: any) {
    this.editRoleInfo = role
    this.role.patchValue({
      // id:role.id,
      roleName:role.roleName,
      isActive:role.isActive,
    })
  }

}


