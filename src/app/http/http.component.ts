import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(public test : TestService) { }
  public userArr =[]
  ngOnInit(): void {
      this.test.getUsers().subscribe(data=> {
        console.log(data);
        if (localStorage.getItem('github') === null) {
          localStorage.setItem('github', JSON.stringify(data)) 
        }
  
    })
  }

}
