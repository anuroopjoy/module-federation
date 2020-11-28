import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-component',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Lazy component init')
  }

}
