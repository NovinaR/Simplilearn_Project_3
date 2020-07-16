import { Component, OnInit } from '@angular/core';
import { Results } from '../results';
import { OnlinetestService } from '../onlinetest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

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
  }

}
