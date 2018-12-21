import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class DasarService{
    
    private _url = "http://localhost/otentik/api/otq/";
    constructor(private http: HttpClient){}

    public hit_api_get_old(urlx){
        return this.http.get(this._url+urlx);
    }

    public hit_api_get(urlx): Observable<any>{
        return this.http.get(this._url+urlx);
    }





}