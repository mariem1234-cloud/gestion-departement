import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit{

constructor(private _emp:EmployeeService,private _dep:DepService  ,private act:ActivatedRoute,private router:Router){}
  image:any;
  id:any;
  emp:any;
  dep:any;
  deps:any;

  myImage:any


  selectImage(e:any){
    this.image=e.target.files[0]
  }

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


    this.id=this.act.snapshot.paramMap.get('id')
    

    this._emp.getById(this.id)
    .subscribe(
      {
        next:(res)=>{
          this.emp=res
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )

  }

  update(){
    let fd=new FormData();
    fd.append('name', this.emp.name);
    fd.append('lastname', this.emp.lastname);
    fd.append('email', this.emp.email);
    fd.append('tel', this.emp.tel);
    fd.append('address', this.emp.address);
    fd.append('idDep', this.emp.idDep);

    if(this.myImage){
      fd.append('image', this.myImage)
    }else{
      fd.append('image', this.emp.image)
    }

this._emp.update(this.id, fd)
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
      
      this.router.navigate(['/dashboard/gestionemployee/listemployee'])
    },
    error:(err)=>{
      console.log(err)
    }

  }


  

)
  
  }

 


}
