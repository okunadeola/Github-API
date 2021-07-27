import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-githubhome',
  templateUrl: './githubhome.component.html',
  styleUrls: ['./githubhome.component.css']
})
export class GithubhomeComponent implements OnInit {

  constructor(public _data: TestService, public route: Router) { }
  public userData: any = []

  ngOnInit(): void {
    setTimeout(() => {
      this._data.getUsers().subscribe(data=> {
        this.userData= data
          })
    }, 2000)

      //  let data: any = localStorage.getItem('github')
      //  let refineData:any = JSON.parse(data)
      //  this.userData= refineData
  }

  routeToGithub(username:any){
    this.route.navigate([`/githubsinglepage/${username}`])
  
  }

}
