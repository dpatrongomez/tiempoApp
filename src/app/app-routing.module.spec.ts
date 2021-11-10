import { routes } from './app-routing.module';
import { MunicipiosComponent } from './tiempo/pages/municipios/municipios.component';

describe('Principal Routes', () => {
  it('should exist /municipios/:id', () => {
    expect(routes).toContain({
      path: 'municipios/:id',
      component: MunicipiosComponent,
    });
  });
});
