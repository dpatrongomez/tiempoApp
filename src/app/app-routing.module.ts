import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './tiempo/pages/principal/principal.component';
import { MunicipiosComponent } from './tiempo/pages/municipios/municipios.component';


const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    pathMatch: 'full'
  },
  {
    path: 'municipios/:id',
    component: MunicipiosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
