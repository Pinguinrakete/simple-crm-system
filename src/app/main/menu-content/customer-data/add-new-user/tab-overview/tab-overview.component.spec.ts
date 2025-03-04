import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOverviewComponent } from './tab-overview.component';

describe('OverviewComponent', () => {
  let component: TabOverviewComponent;
  let fixture: ComponentFixture<TabOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
