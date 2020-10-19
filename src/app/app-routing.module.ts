import { GithubComponent } from './github/github.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  { path: '', redirectTo:"/my-profile", pathMatch:"full"},
  { path: 'github', component: GithubComponent},
  { path: 'my-profile', component: MyProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
