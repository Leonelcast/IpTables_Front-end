import { Component, OnInit } from '@angular/core';
import {IptablesService} from '../../services/iptables.service'
import {Regla} from '../../models/regla'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ipTablesService: IptablesService) { }

  ngOnInit(): void {
    this.getTables()
  }
  getTables(){
    this.ipTablesService.getAllIptables().subscribe(
      res=> {
        this.ipTablesService.rules = res;
      },
      err => console.error(err)
    )
  }

}
