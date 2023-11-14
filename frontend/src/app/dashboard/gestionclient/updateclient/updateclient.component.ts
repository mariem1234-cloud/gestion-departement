import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

id:any;
cl:any;
client:any; 

image:any;

selectPhoto(e:any){
  this.image=e.target.files[0]
}

  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id')
    

    this._cl.getById(this.id)
    .subscribe(
      {
        next:(res)=>{
          this.client=res
        },
        error:(err)=>{
          console.log(err)
        }
        
      }
    )

  }

  update(){

    let fd=new FormData();
    fd.append('name', this.client.name);
    fd.append('description', this.client.description);
    fd.append('entreprise', this.client.entreprise);
    fd.append('titreproject', this.client.titreproject);
    if (this.image){
      fd.append('image', this.image)
    }else{
      fd.append('image', this.client.image)
    }

    this._cl.update(this.id, fd)
    .subscribe(
      {
        next:(res)=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });

          this.router.navigate(['/dashboard/gestionclient/listclient'])


        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
  }

  constructor(private _cl:ClientService, private act:ActivatedRoute, private router:Router){}
}
