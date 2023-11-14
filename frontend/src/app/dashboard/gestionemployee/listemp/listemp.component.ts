import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {
  emps: any;

  constructor(private _emp: EmployeeService) {}

  ngOnInit(): void {
    this._emp.getAll()
    .subscribe(
      (res) => {
        this.emps = res;
      },
      (error) => {
        console.log(error);
      }
    );
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
           this._emp.delete(id)
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
