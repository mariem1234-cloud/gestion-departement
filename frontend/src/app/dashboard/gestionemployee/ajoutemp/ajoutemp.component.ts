import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutemp',
  templateUrl: './ajoutemp.component.html',
  styleUrls: ['./ajoutemp.component.css']
})
export class AjoutempComponent implements OnInit{
  deps:any;

  ngOnInit(): void {
    this._dep.getAll()
    .subscribe(
      {
        next:(res)=>{
          this.deps=res
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
  }

  constructor(private _emp:EmployeeService, private router:Router, private _dep:DepService){}

  emp={
    name:'',
    lastname:'',
    tel:'',
    email:'',
    address:'',
    idDep:'',
  }

  myimage:any;
  dep:any;

  selectImage(e:any){
    this.myimage=e.target.files[0]
  }

ajout(){
  
  let fd=new FormData();

  fd.append('name', this.emp.name);
  fd.append('lastname', this.emp.lastname);
  fd.append('tel', this.emp.tel);
  fd.append('email', this.emp.email);
  fd.append('address', this.emp.address);
  fd.append('idDep', this.emp.idDep);
  fd.append('image', this.myimage);


  this._emp.create(fd)
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

        this.router.navigate(['/dashboard/gestionemployee/listemployee'])

        

      },
      error:(err)=>{
        console.log(err)
      }
    }
  )

}

}
