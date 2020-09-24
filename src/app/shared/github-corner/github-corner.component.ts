import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-corner',
  templateUrl: './github-corner.component.html',
  styleUrls: ['./github-corner.component.scss'],
})
export class GithubCornerComponent implements OnInit {
  url = 'https://github.com/PKief/material-color-converter';

  constructor() {}

  ngOnInit(): void {}
}
