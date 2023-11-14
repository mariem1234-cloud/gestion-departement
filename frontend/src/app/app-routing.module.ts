import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { GestionemployeeComponent } from './dashboard/gestionemployee/gestionemployee.component';
import { GestiondepartementComponent } from './dashboard/gestiondepartement/gestiondepartement.component';
import { ListclientComponent } from './dashboard/gestionclient/listclient/listclient.component';
import { AjoutclientComponent } from './dashboard/gestionclient/ajoutclient/ajoutclient.component';
import { UpdateclientComponent } from './dashboard/gestionclient/updateclient/updateclient.component';
import { ListempComponent } from './dashboard/gestionemployee/listemp/listemp.component';
import { AjoutempComponent } from './dashboard/gestionemployee/ajoutemp/ajoutemp.component';
import { UpdateempComponent } from './dashboard/gestionemployee/updateemp/updateemp.component';
import { ListdepartementComponent } from './dashboard/gestiondepartement/listdepartement/listdepartement.component';
import { AjoutdepartementComponent } from './dashboard/gestiondepartement/ajoutdepartement/ajoutdepartement.component';
import { UpdatedepartementComponent } from './dashboard/gestiondepartement/updatedepartement/updatedepartement.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},

  {path:'dashboard', component:DashboardComponent, children:[
 
  {path:'gestionclient', component:GestionclientComponent, children:[
    {path:'', redirectTo:'listclient', pathMatch:'full'},
    {path:'listclient', component:ListclientComponent},
    {path:'ajoutclient', component:AjoutclientComponent},
    {path:'updateclient/:id', component:UpdateclientComponent}
  ]},

  {path:'gestionemployee', component:GestionemployeeComponent, children:[
    {path:'', redirectTo:'listemployee', pathMatch:'full'},
    {path:'listemployee', component:ListempComponent},
    {path:'ajoutemployee', component:AjoutempComponent},
    {path:'updateemployee/:id', component:UpdateempComponent}

  ]},

  {path:'gestiondepartement', component:GestiondepartementComponent, children:[
    {path:'', redirectTo:'listdepartement', pathMatch:'full'},
    {path:'listdepartement', component:ListdepartementComponent},
    {path:'ajoutdepartement', component:AjoutdepartementComponent},
    {path:'updatedepartement/:id', component:UpdatedepartementComponent}
  ]},

]},


  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
