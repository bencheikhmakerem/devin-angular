import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevinComponent } from './devin/devin.component';

/*export const routes: Routes = [
  {path:'',redirectTo: '/' , pathMatch:'full'},
  {path: 'devin',component: DevinComponent}
];*/
 export const allAppRoutes: Routes = [
  { path: '', component: DevinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(allAppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
