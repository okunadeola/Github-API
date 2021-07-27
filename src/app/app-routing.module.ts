import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubhomeComponent } from './githubhome/githubhome.component';
import { GithubsinglepageComponent } from './githubsinglepage/githubsinglepage.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path : '', component: GithubhomeComponent},
  {path : 'githubsinglepage/:username', component: GithubsinglepageComponent},
  {path: '**', component :HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true,
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
