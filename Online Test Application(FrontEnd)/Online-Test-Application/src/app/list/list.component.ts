import { Component, OnInit } from '@angular/core';
import { OnlinetestService } from '../onlinetest.service';
import { Onlinetest } from '../onlinetest';
import { Results } from '../results';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private onlinetests:Onlinetest[];
  public result:Results[];

  constructor(private service:OnlinetestService) { }

  ngOnInit() {

    this.service.getAll().subscribe(res=>{
      this.onlinetests=res
    });
    this.service.getAllAnswers().subscribe(res=>{
      this.result=res
    });
    
  }

}
