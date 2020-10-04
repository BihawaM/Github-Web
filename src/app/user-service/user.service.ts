import { environment } from './../../environments/environment';
import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[]

  getUser(userTerm: string){
    let searchEndpoint = `https://api.github.com/search/users?access_token=${environment.apiKey}&q=${userTerm}`
    let promise = new Promise((resolve, reject) => {
      this.http.get(searchEndpoint).toPromise().then((results) => {this.user = [];
            for (let i = 0; i < results['items'].length; i++) {
              let name = results['items'][i]['login'];
              let image = results['items'][i]['avatar_url'];
              let repos = results['items'][i]['repos_url']; 
              let githublink = results['items'][i]['html_url'];             
              let user = new User(name, image, repos, githublink);
              this.user.push(user);
            }
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
    return promise;
  }

  constructor(private http : HttpClient) { }
}
