import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private meta:Meta
  ) { }

  ngOnInit(): void {
    this.meta.updateTag({keywords:"home, td, typescript, meta, seo"})
  }

}
