import { Component, OnInit } from '@angular/core';
import { OnlinetestService } from '../onlinetest.service';
import { Router } from '@angular/router';
import { Onlinetest } from '../onlinetest';
import { Results } from '../results';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  private onlinetests:Onlinetest[];
  private result:Results;
  
  constructor(private service:OnlinetestService,private router : Router) { 
    this.result=new Results();
  }

  createResults(){
    this.service.createResults(this.result).subscribe(res=>this.gotoAnimalList())
  }
  gotoAnimalList(){
    this.result=new Results;
    // this.router.navigate(['/values'])
  }

  ngOnInit() {

    this.service.getAll().subscribe(res=>{
      this.onlinetests=res
    });
   
  }

}
