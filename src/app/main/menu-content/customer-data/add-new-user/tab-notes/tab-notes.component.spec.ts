import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNotesComponent } from './tab-notes.component';

describe('TabNotesComponent', () => {
  let component: TabNotesComponent;
  let fixture: ComponentFixture<TabNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
