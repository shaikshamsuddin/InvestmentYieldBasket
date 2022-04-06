import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dataContribution',
  templateUrl: './data-contribution.component.html',
  styleUrls: ['./data-contribution.component.css']
})
export class DataContributionComponent implements OnInit {
  isShow = false;

  public progress: Array<any> = [
    { title: "NYLIM1", percentage: "50" },
    { title: "NYLIM2", percentage: "100" },
    { title: "NYLIM3", percentage: "75" },
    { title: "NYLIM4", percentage: "80 " },
    { title: "NYLIM5", percentage: "50" },
    { title: "NYLIM6", percentage: "100" },
    { title: "NYLIM7", percentage: "75" },
    { title: "NYLIM8", percentage: "80 " },
    { title: "NYLIM9", percentage: "50" },
    { title: "NYLIM10", percentage: "100" },
    { title: "NYLIM13", percentage: "75" },
    { title: "NYLIM14", percentage: "80 " }
  ];
  public agencyYields: Array<any> = [
    {year : '10'},
    {year : '15'},
    {year : '30'},
    {year : '35'},
    {year : '40'}
  ];
  constructor() { }

     public cancel(){
    console.log("cancel")
 
  }
  isShowFields(){
    console.log("Next Button Clicked");
    this.isShow = true;   
  }
  close(){
    console.log("Next Button Clicked");
    this.isShow = false;   
  }
  ngOnInit(): void {
  }

}
