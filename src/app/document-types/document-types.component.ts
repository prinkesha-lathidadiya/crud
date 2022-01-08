import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-document-types',
  templateUrl: './document-types.component.html',
  styleUrls: ['./document-types.component.css']
})
export class DocumentTypesComponent implements OnInit {

  documentData: any = []
  editdocumentInfo: any = null
  documentType: FormGroup
  // userHobbies: any = []
  
  
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.documentType = this.fb.group({
      documentType: [''],
      isActive:[''],
    })
  }

 

  ngOnInit(): void {
    this.getdocument()
  }

 
  getdocument() {
    this.http.get(`${environment.apiEndPoints}/api/DocumentTypes/GetAllDocumentTypes`,
    {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEiLCJVc2VyTmFtZSI6IkFkbWluIiwiVGVuYW50SWQiOiIxIiwiUm9sZSI6IiIsIlJvbGVJZCI6IjEiLCJFbXBsb3llZUlkIjoiMCIsIkNvbXBhbnlJZCI6IjEiLCJuYmYiOjE2NDEzNTI4ODcsImV4cCI6MTY0MTQzOTI4NiwiaWF0IjoxNjQxMzUyODg3fQ.W3x5DNGUJN5f5catRsXado1HUAXLKuDB6JOoGKfLWa0'
      }
    }).subscribe((res: any) => {
      this.documentData = res.data
    })
  }

  deletedocument(id: number) {
    this.http.delete(`${environment.apiEndPoints}/api/DocumentTypes/DeleteDocumentType?id=${id}`).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Data deleted successfully')
        this.getdocument()
      } else {
        alert(res.message)
      }
    })
  }

  updatedocument() {
    this.http.post(`${environment.apiEndPoints}/api/DocumentTypes/CreateOrUpdateDocumentType`, {
      ...this.editdocumentInfo,
      id: this.editdocumentInfo.id,
      ...this.documentType.value
    }).subscribe((res: any) => {
      if (res.isSuccess) {
        this.editdocumentInfo = null
        alert('Data updated successfully')
        this.documentType.reset()
        this.getdocument()
      } else {
        alert(res.message)
      }
    })
  }




  adddocument() {
    if (this.editdocumentInfo) {
      this.updatedocument()
      return
    }
    this.http.post(`${environment.apiEndPoints}/api/DocumentTypes/GetActiveDocumentTypes`, this.documentType.value).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Data added successfully')
        this.documentType.reset()
        this.getdocument()
      } else {
        alert(res.message)
      }
    })
  }

  editdocument(document: any) {
    this.editdocumentInfo = document
    this.documentType.patchValue({
      // id:role.id,
      documentType:document.documentType,
      isActive:document.isActive,
    })
  }

}
