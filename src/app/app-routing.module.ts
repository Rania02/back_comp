import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateappointementComponent } from './components/appointementcomponents/createappointement/createappointement.component';
import { ReadappointementComponent } from './components/appointementcomponents/readappointement/readappointement.component';
import { CreateComponent } from './create/create.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'create/:id_comp',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'createapp',component:CreateappointementComponent},
  {path:'readapp',component:ReadappointementComponent},
  {path:'createapp/:id_app',component:CreateappointementComponent},
  {path:'piechart',component:PieChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
