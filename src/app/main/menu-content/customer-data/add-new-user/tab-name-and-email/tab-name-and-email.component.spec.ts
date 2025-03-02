import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNameAndEmailComponent } from './tab-name-and-email.component';

describe('TabNameAndEmailComponent', () => {
  let component: TabNameAndEmailComponent;
  let fixture: ComponentFixture<TabNameAndEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNameAndEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNameAndEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
