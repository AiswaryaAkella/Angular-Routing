import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiswaryaComponent } from './aiswarya.component';

describe('AiswaryaComponent', () => {
  let component: AiswaryaComponent;
  let fixture: ComponentFixture<AiswaryaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiswaryaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiswaryaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
