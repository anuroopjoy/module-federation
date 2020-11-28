import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: '<div style="padding: 100px">Home</div>',
})
export class HomeComponent {
  constructor(router: Router) {
    router.navigate(['home']);
  }
}
