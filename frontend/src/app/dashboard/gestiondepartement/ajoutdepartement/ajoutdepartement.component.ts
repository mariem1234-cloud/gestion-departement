import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutdepartement',
  templateUrl: './ajoutdepartement.component.html',
  styleUrls: ['./ajoutdepartement.component.css']
})
export class AjoutdepartementComponent {
dep={
  name:'',
  description:'',
  etage:0,
  salle:0
}

constructor(private _dep:DepService, private router:Router){}

ajout(){
  this._dep.create(this.dep)
.subscribe(
  (res)=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
this.router.navigate(['/dashboard/gestiondepartement/listdepartement'])
  },

  (err)=>{
    console.log(err)
  }
)
}
}
