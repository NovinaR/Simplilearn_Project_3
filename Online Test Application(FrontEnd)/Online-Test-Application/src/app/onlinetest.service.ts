import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Onlinetest } from './onlinetest';
import { Results } from './results';

@Injectable({
  providedIn: 'root'
})
export class OnlinetestService {

  private url:string;
  constructor(private http:HttpClient) {
    this.url="http://localhost:8080/"
   }

  public createResults(result:Results){
    return this.http.post<Results>(this.url+"results",result);
  }

   public getAll():Observable<Onlinetest[]>{
     return this.http.get<Onlinetest[]>(this.url+"values");
   }

   public getAllAnswers():Observable<Results[]>{
    return this.http.get<Results[]>(this.url+"entered");
  }

  public getScore():Observable<Results[]>{
    return this.http.get<Results[]>(this.url+"score");
  }

   btnClick= function () {
    this.router.navigateByUrl('/results');
};

}


