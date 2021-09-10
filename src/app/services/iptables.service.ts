import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IpTable } from '../models/iptable';
import { Regla } from '../models/regla';

@Injectable({
  providedIn: 'root'
})
export class IptablesService {
  URL_API_ALL = 'http://localhost:5000/api/allIp'
  URL_API_DELETE = 'http://localhost:5000/api/deleteAll'
  URL_API_INPUT = 'http://localhost:5000/api/createInput'
  URL_API_FORWARD = 'http://localhost:5000/api/createForward'
  URL_API_OUT = 'http://localhost:5000/api/createOutput'
  iptables:IpTable[] | undefined
  rules: Regla[] = []; 
  constructor(private http: HttpClient) { }
  getAllIptables(){
    return this.http.get<Regla[]>(this.URL_API_ALL);
  }

  createInput(iptables : IpTable){
    return this.http.post(this.URL_API_INPUT, iptables);
}
  createForward(iptables : IpTable){
    return this.http.post(this.URL_API_FORWARD, iptables);
}
  createOutput(iptables : IpTable){
    return this.http.post(this.URL_API_OUT, iptables);
  }
  deleteIpTables(iptables : IpTable){
    return this.http.post(this.URL_API_DELETE, iptables);
  }
}
