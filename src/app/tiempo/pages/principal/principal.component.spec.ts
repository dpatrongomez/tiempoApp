import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';
import { BuscadorService } from '../../services/buscador.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http/';

class FakeRouter {
  navigate(params: any) {}
}

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalComponent],
      providers: [BuscadorService, { provide: Router, useClass: FakeRouter }],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should navigate to municipios', () => {
  //   const router: any = TestBed.inject(Router);
  //   const spy = spyOn(router, 'navigate');

  //   component.consultar();

  //   expect(spy).toHaveBeenCalledOnceWith(['/municipios/', typeof ''])
  // });
});
