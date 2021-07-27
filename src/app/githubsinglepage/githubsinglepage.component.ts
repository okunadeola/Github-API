import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-githubsinglepage',
  templateUrl: './githubsinglepage.component.html',
  styleUrls: ['./githubsinglepage.component.css']
})
export class GithubsinglepageComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public getUser : TestService) { }
  public username :any = ''
  public userData :any = []
  public followers :any = []
  // public userData :any = []
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(param =>{
      this.username = param.get('username')
    })


    this.getUser.getusername(this.username).subscribe(data=> {
        this.userData= data
        console.log(data);
        
          })

    this.getUser.getfollowers(this.username).subscribe(data=>{
      this.followers = data
      console.log(this.followers);
      
    })  

    let data: any = localStorage.getItem('github')
    let refineData:any = JSON.parse(data)
    let details:any = refineData.find((val:any)=> val.login === this.username)
    this.userData= details
    // this.followers = details.followers_url
    // console.log(this.followers);
    


    




  }

}
