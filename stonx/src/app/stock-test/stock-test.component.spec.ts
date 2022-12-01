import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTestComponent } from './stock-test.component';

describe('StockTestComponent', () => {
  let component: StockTestComponent;
  let fixture: ComponentFixture<StockTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
