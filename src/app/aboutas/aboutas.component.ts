import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutas',
  templateUrl: './aboutas.component.html',
  styleUrls: ['./aboutas.component.scss']
})
export class AboutasComponent implements OnInit {

  constructor(
    private meta:Meta
  ) { }

  ngOnInit(): void {

  }

}
