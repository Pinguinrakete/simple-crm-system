import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerDataComponent } from './customer-data.component';

describe('ContactManagementComponent', () => {
  let component: CostumerDataComponent;
  let fixture: ComponentFixture<CostumerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostumerDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostumerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
