import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/layout/header/header.component';
import { SidebarComponent } from './dashboard/layout/sidebar/sidebar.component';
import { FooterComponent } from './dashboard/layout/footer/footer.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { GestionemployeeComponent } from './dashboard/gestionemployee/gestionemployee.component';
import { GestiondepartementComponent } from './dashboard/gestiondepartement/gestiondepartement.component';
import { ListempComponent } from './dashboard/gestionemployee/listemp/listemp.component';
import { AjoutempComponent } from './dashboard/gestionemployee/ajoutemp/ajoutemp.component';
import { UpdateempComponent } from './dashboard/gestionemployee/updateemp/updateemp.component';
import { ListclientComponent } from './dashboard/gestionclient/listclient/listclient.component';
import { AjoutclientComponent } from './dashboard/gestionclient/ajoutclient/ajoutclient.component';
import { UpdateclientComponent } from './dashboard/gestionclient/updateclient/updateclient.component';
import { ListdepartementComponent } from './dashboard/gestiondepartement/listdepartement/listdepartement.component';
import { AjoutdepartementComponent } from './dashboard/gestiondepartement/ajoutdepartement/ajoutdepartement.component';
import { UpdatedepartementComponent } from './dashboard/gestiondepartement/updatedepartement/updatedepartement.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    GestionclientComponent,
    GestionemployeeComponent,
    GestiondepartementComponent,
    ListempComponent,
    AjoutempComponent,
    UpdateempComponent,
    ListclientComponent,
    AjoutclientComponent,
    UpdateclientComponent,
    ListdepartementComponent,
    AjoutdepartementComponent,
    UpdatedepartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
