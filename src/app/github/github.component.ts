import { RepoService } from './../repo-service/repo.service';
import { Repo } from './../repo';
import { UserService } from './../user-service/user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:User[];
  repo : Repo[];
  userLength : number;
  repoLength : number;

  constructor(public findUser : UserService, public  findRepo: RepoService) { }
  searchUser(userTerm: string){
    this.findUser.getUser(userTerm).then(()=>{
      this.user = this.findUser.user;
      this.userLength = this.findUser.user.length;
    },
     (error) => {
      console.log(error);
    }
    );
    this.findRepo.getRepo(userTerm).then(()=>{
      this.repo = this.findRepo.user;
      this.repoLength = this.findRepo.user.length;
    },
     (error) => {
      console.log(error);
    }
    );

  }
   
    

  ngOnInit(): void {
    this.searchUser('Mohamed')
  }

}
