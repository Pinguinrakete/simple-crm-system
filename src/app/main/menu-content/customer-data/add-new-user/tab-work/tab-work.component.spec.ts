import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWorkComponent } from './tab-work.component';

describe('TabWorkComponent', () => {
  let component: TabWorkComponent;
  let fixture: ComponentFixture<TabWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
