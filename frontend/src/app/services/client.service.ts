import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url='http://127.0.0.1:3000/client'

  constructor(private http: HttpClient) { }

  create(cl:any){
    return this.http.post(this.url+'/ajout', cl)
  }
   
getAll(){
  return this.http.get(this.url+'/all')

}

  delete(id:any){
    return this.http.delete(this.url+'/delete/'+id)

  }

  getById(id:any){
    return this.http.get(this.url+'/getbyid/'+id)

  }

  update(id:any, cl:any){
    return this.http.put(this.url+'/update/'+id, cl)

  }
}
