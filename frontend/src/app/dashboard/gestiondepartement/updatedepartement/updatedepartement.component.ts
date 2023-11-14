import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatedepartement',
  templateUrl: './updatedepartement.component.html',
  styleUrls: ['./updatedepartement.component.css']
})
export class UpdatedepartementComponent implements OnInit{

 id:any;
 dep:any;

  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');

    this._dep.getById(this.id)
    .subscribe(
      {
        next:(res)=>{
          this.dep=res
        },
        error:(err)=>{
          console.log(err)
        }
      }
      

    )
    
  }

  update() {
    this._dep.update(this.id, this.dep)
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

          this.router.navigate(['/dashboard/gestiondepartement/listdepartement'])
      },
      error:(err)=>{
        console.log(err)
      }
        
      }
    )



  }  
constructor(private _dep:DepService, private act:ActivatedRoute, private router:Router){}



}
