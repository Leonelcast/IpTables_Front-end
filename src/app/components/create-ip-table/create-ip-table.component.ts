import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IptablesService } from 'src/app/services/iptables.service';

@Component({
  selector: 'app-create-ip-table',
  templateUrl: './create-ip-table.component.html',
  styleUrls: ['./create-ip-table.component.css']
})
export class CreateIpTableComponent implements OnInit {

  constructor(private ipTablesService: IptablesService) { }

  ngOnInit(): void {}

    deleteIpTables(){
      this.ipTablesService.deleteIpTables(IptablesService).subscribe(
        res=> console.log(res),
        err => console.error(err)
      )
      
    }

    Input(){
      this.ipTablesService.createInput(IptablesService).subscribe(
        res=> console.log(res),
        err => console.error(err)
      )
      
    }
    Output(){
      this.ipTablesService.createOutput(IptablesService).subscribe(
        res=> console.log(res),
        err => console.error(err)
      )
      
    }
    Forward(){
      this.ipTablesService.createForward(IptablesService).subscribe(
        res=> console.log(res),
        err => console.error(err)
      )
      
    }
}
