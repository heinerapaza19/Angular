import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Promocionar } from './promociones';

describe('Promocionar', () => {
  let component: Promocionar;
  let fixture: ComponentFixture<Promocionar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Promocionar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Promocionar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
