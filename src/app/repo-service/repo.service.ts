// import { HttpClient } from '@angular/common/http';
// import { environment } from './../../environments/environment';
// import { Repo } from './../repo';
// import { Injectable } from '@angular/core';




// @Injectable({
//   providedIn: 'root'
// })
// export class RepoService {
 
//   user: Repo[]

//   getRepo(userTerm: string){
//     let searchEndpoint = `https://api.github.com/search/repositories?access_token=${environment.apiKey}&q=${userTerm}`
//     let promise = new Promise((resolve, reject) => {
//       this.http.get(searchEndpoint).toPromise().then((results) => {this.user = [];
//         for (let i = 0; i < results['items'].length; i++) {
//           let fullname = results['items'][i]['full_name'];
//           let description = results['items'][i]['description'];
//           let language = results['items'][i]['language'];
//           let year = parseInt(
//             results['items'][i]['created_at'].substr(0, 4)
//           );
//           let month =
//             parseInt(results['items'][i]['created_at'].substr(5, 7)) - 1;
//           let day = parseInt(
//             results['items'][i]['created_at'].substr(8, 10)
//           );
//           let date = new Date(year, month, day);
//           let githublink = results['items'][i]['html_url'];
//           let livelink = results['items'][i]['homepage'];
//           let repo = new Repo(
            
//             fullname,
//             description,
//             language,
//             date,
//             githublink,
//             livelink
            
//           );
          
//           this.user.push(repo);
//         }
//         resolve();
       
//           },
//           (error) => {
//             console.log(error);
//             reject();
//           }
//         );
//     });
//     return promise;
//   }


//   constructor(private http : HttpClient) { }
  
// }
