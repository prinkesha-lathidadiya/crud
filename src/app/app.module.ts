import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { LimitCharatersDirective } from './directive/limit-charaters.directive';
import { RoleComponent } from './role/role.component';
import { DepartmentComponent } from './department/department.component';
import { DocumentTypesComponent } from './document-types/document-types.component';
import { SelctionComponent } from './selction/selction.component';
import { DirectiveNgComponent } from './directive-ng/directive-ng.component';
import { PipesNgComponent } from './pipes-ng/pipes-ng.component';
// import { OverTimeApplicationComponent } from './over-time-application/over-time-application.component';
import { CrudUserComponent } from './crud-user/crud-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChekboxComponent } from './chekbox/chekbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    ProductComponent,
    ReactiveFormsComponent,
    AngularPipesComponent,
    FilterPipe,
    ShortNumberPipe,
    AngularDirectiveComponent,
    LimitCharatersDirective,
    RoleComponent,
    DepartmentComponent,
    DocumentTypesComponent,
    SelctionComponent,
    DirectiveNgComponent,
    PipesNgComponent,
    // OverTimeApplicationComponent,
    CrudUserComponent,
    ChekboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
