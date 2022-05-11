import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }
  apiUrl='http://localhost:3000/complaint';
  apiUrl2='http://localhost:3000/appointement';
  //get all complaint
  getAllData():Observable<any>
  {
   return this._http.get(`${this.apiUrl}`) ;
  }
   //get all appointement
   getAllData2():Observable<any>
   {
    return this._http.get(`${this.apiUrl2}`) ;
   }
  //create data complaint
  createData(data:any):Observable<any>
  {
    console.log(data,'createapi=>');
  return this._http.post(`${this.apiUrl}`,data);
  }
   //create data appointement
   createData2(data:any):Observable<any>
   {
     console.log(data,'createapi=>');
   return this._http.post(`${this.apiUrl2}`,data);
   }
  //delete data complaint
  deleteData(id_comp:any):Observable<any>
  {
    let ids=id_comp;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }
   //delete data appointement
   deleteData2(id_app:any):Observable<any>
   {
     let ids=id_app;
     return this._http.delete(`${this.apiUrl2}/${ids}`);
   }
  //update data complaint
  updateData(data:any,id_comp:any):Observable<any>
  {
    let ids=id_comp;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }
    //update data appointement
    updateData2(data:any,id_app:any):Observable<any>
    {
      let ids=id_app;
      return this._http.put(`${this.apiUrl2}/${ids}`,data);
    }
  //getSingleDate
  getSingleData(id_comp:any):Observable<any>
  {
    let ids=id_comp;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }
    //getSingleDate
    getSingleData2(id_app:any):Observable<any>
    {
      let ids=id_app;
      return this._http.get(`${this.apiUrl2}/${ids}`);
    }
}
