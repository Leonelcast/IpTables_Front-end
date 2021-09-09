import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IptablesService {
  URL_API_INPUT = 'http://localhost:5000/api/allIp'

  constructor(private http: HttpClient) { }
  getAllIptables(){
    return this.http.get(this.URL_API_INPUT);
  }

}
