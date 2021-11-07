import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MunicipiosComponent } from './pages/municipios/municipios.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { IconoPipe } from './pipes/icono.pipe';



@NgModule({
  declarations: [
    MunicipiosComponent,
    PrincipalComponent,
    IconoPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ], 
})
export class TiempoModule { }
