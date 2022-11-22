import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
  //new here i will define the post,get,put,delete 0
  //create resturant using post mathod
  postResturant(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  //Get Resturant data using get method
  getResturant(){
    return this._http.get<any>("http://localhost:3000/posts/").pipe(map((res:any)=>{
      return res;
    }))
  }

  //update resturant using put method

  updateResturant(data:any, id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data)
  }


  //Delete Resturant data using delete method

  deleteResturant(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id);
  }
  //that's it
  

  
}
