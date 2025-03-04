import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFamilyComponent } from './tab-family.component';

describe('FamilyComponent', () => {
  let component: TabFamilyComponent;
  let fixture: ComponentFixture<TabFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabFamilyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
