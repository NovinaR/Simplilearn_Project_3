import { Component, OnInit } from '@angular/core';
import { Results } from '../results';
import { OnlinetestService } from '../onlinetest.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  private result:Results[];

  constructor(private service:OnlinetestService) { }

  ngOnInit() {
    this.service.getScore().subscribe(res=>{
      this.result=res
    });
  }

}
