import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { ApiComponent } from './api/api.component';
import { CrudUserComponent } from './crud-user/crud-user.component';
import { DepartmentComponent } from './department/department.component';
import { DirectiveNgComponent } from './directive-ng/directive-ng.component';
import { DocumentTypesComponent } from './document-types/document-types.component';
// import { OverTimeApplicationComponent } from './over-time-application/over-time-application.component';
import { PipesNgComponent } from './pipes-ng/pipes-ng.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RoleComponent } from './role/role.component';
import { SelctionComponent } from './selction/selction.component';

const routes: Routes = [
  { path: 'students', component: ApiComponent, },
  { path: 'Product', component: ProductComponent, },
  { path: 'reactive-form', component: ReactiveFormsComponent, },
  { path: 'pipes', component: AngularPipesComponent, },
  { path: 'directive', component: AngularDirectiveComponent, },
  { path: 'role', component: RoleComponent, },
  { path: 'Department', component: DepartmentComponent, },
  { path: 'DocumentTypes', component: DocumentTypesComponent, },
  { path: 'selction-directive', component: SelctionComponent, },
  { path: 'directive-ng', component: DirectiveNgComponent, },
  { path: 'pipes-ng', component: PipesNgComponent, },
  { path: 'users', component: CrudUserComponent, },
  { path: 'users/create', component: CrudUserComponent, },
  { path: 'users/edit/:editId', component: CrudUserComponent, },
  { path: 'users/delete/:deleteId', component: CrudUserComponent, },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
