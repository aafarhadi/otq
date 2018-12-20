import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DasarService{
    
    private _url = "http://localhost/otentik/api/otq/";
    constructor(private http: HttpClient){}

    hit_api_get(urlx){
        return this.http.get(this._url+urlx);
    }





}