import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { RepoHttpService } from '../repo-http/repo-http.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  username: string;
  github: any;
  repos: any;
  //  public githubUser:string;
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  search() {
    // this service.GitRequest
    this.http
      .get(
        'https://api.github.com/users/' +
          this.username +
          '?access_token=220f50958fc0d7d6af724e605803a914052fb131'
      )
      .subscribe((github) => {
        this.github = github;
      });
  }
}
