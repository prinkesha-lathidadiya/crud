import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


 
  productData: any = []
  editproductInfo: any = null
  product: FormGroup
  Description:any =['Cotton shirt','slik Shirt']
  clothSize: any =['XL,L','XXL','XL']
  category: any =['boys','girls']
  
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.product = this.fb.group({
      category: [''],
      productName: [''],
      description:[''],
      price:[''],
      clothSize:[''],
      inStock:[''],
      id:['']
    })
  }

 

  ngOnInit(): void {
    this.getproduct()
  }

  getproduct() {
    this.http.get(`${environment.adiEndPoint}/api/product/get`).subscribe((res: any) => {
      this.productData = res.data
    })
  }

  deleteProduct(id: number) {
    this.http.delete(`${environment.adiEndPoint}/api/product/delete?id=${id}`).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Data deleted successfully')
        this.getproduct()
      } else {
        alert(res.message)
      }
    })
  }

  updateProduct() {
    this.http.post(`${environment.adiEndPoint}/api/product/update`, {
      ...this.editproductInfo,
      id: this.editproductInfo.id,
      ...this.product.value
    }).subscribe((res: any) => {
      if (res.isSuccess) {
        this.editproductInfo = null
        alert('Data updated successfully')
        this.product.reset()
        this.getproduct()
      } else {
        alert(res.message)
      }
    })
  }




  addProduct() {
    if (this.editproductInfo) {
      this.updateProduct()
      return
    }
    this.http.post(`${environment.adiEndPoint}/api/product/add`, this.product.value).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Data added successfully')
        this.product.reset()
        this.getproduct()
      } else {
        alert(res.message)
      }
    })
  }

  editProduct(product: any) {
    this.editproductInfo = product
    this.product.patchValue({
      category:product.category,
      productName:product.productName,
      description:product.description,
      price:product.price,
      clothSize:product.clothSize,
      inStock:product.inStock,
      id:product._id
    })
  }

}

