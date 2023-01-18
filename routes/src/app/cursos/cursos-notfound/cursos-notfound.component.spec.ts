import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosNotfoundComponent } from './cursos-notfound.component';

describe('CursosNotfoundComponent', () => {
  let component: CursosNotfoundComponent;
  let fixture: ComponentFixture<CursosNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosNotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
