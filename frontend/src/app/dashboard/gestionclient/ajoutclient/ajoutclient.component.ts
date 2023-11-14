import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutclient',
  templateUrl: './ajoutclient.component.html',
  styleUrls: ['./ajoutclient.component.css']
})
export class AjoutclientComponent {

client={
  name:'',
  description:'',
  entreprise:'',
  titreproject:''
}

image:any;

selectImage(e:any){
  this.image=e.target.files[0]
}

ajout(){
 let fd=new FormData();

 fd.append('name', this.client.name);
 fd.append('description', this.client.description);
 fd.append('entreprise', this.client.entreprise);
 fd.append('titreproject', this.client.titreproject);
 fd.append('image', this.image);


 this._cl.create(fd)
 .subscribe(
  {
    next:(res)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })

      this.router.navigate(['/dashboard/gestionclient/listclient'])

    },
    error:(err)=>{
      console.log(err)
    }
  }
 )


}


 
  



  constructor(private _cl:ClientService, private router:Router){}

  
}
