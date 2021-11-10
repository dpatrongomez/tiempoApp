import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MunicipiosComponent } from './pages/municipios/municipios.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { IconoPipe } from './pipes/icono.pipe';
import { PrevisionComponent } from './pages/municipios/components/prevision/prevision.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MunicipiosComponent,
    PrincipalComponent,
    IconoPipe,
    PrevisionComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ], 
})
export class TiempoModule { }
