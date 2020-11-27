import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view404',
  templateUrl: './view404.component.html',
  styleUrls: ['./view404.component.scss']
})
export class View404Component implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.route.navigateByUrl('login');
  }
}
