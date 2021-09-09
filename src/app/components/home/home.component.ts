import { Component, OnInit } from '@angular/core';
import {IptablesService} from '../../services/iptables.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ipTablesService: IptablesService) { }

  ngOnInit(): void {
  this.ipTablesService.getAllIptables().subscribe(
    res=> console.log(res),
    err => console.error(err)
  )
  }

}
