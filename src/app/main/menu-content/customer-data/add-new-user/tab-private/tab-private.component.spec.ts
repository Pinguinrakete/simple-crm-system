import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPrivateComponent } from './tab-private.component';

describe('TabPrivateComponent', () => {
  let component: TabPrivateComponent;
  let fixture: ComponentFixture<TabPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPrivateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
