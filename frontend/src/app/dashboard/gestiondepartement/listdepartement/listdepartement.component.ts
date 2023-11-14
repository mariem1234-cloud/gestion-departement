import { Component, OnInit } from '@angular/core';
import { DepService } from 'src/app/services/dep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listdepartement',
  templateUrl: './listdepartement.component.html',
  styleUrls: ['./listdepartement.component.css']
})
export class ListdepartementComponent implements OnInit{


constructor(private _dep:DepService){}

deps:any;
id:any;

ngOnInit():void{

  this._dep.getAll()
  .subscribe(
    (res)=>{
this.deps=res
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
      this._dep.delete(id)

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
