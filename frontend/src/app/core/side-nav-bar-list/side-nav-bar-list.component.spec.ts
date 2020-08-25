import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavBarListComponent } from './side-nav-bar-list.component';

describe('SideNavBarListComponent', () => {
  let component: SideNavBarListComponent;
  let fixture: ComponentFixture<SideNavBarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavBarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
