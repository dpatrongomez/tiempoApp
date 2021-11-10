import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MenuComponent,
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class SharedModule { }
