import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit{

  constructor(private _cl:ClientService){}

 
  id:any;
  cls:any;

ngOnInit(): void {
   this._cl.getAll()
   .subscribe(
    (res)=>{
this.cls=res
    },
    (err)=>{
console.log(err)
    }
   )
}
delete(id:any){
  

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      this._cl.delete(id)

    .subscribe(
      {
        next:(res)=>{
          this.ngOnInit()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
      
    }

  })

}

}
