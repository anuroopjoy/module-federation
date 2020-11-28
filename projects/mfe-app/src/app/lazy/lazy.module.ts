import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: LazyComponent,
      },
    ]),
  ],
  declarations: [LazyComponent],
  exports: [LazyComponent],
})
export class LazyModule {}
