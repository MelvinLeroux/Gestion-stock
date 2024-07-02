import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMvmtstkComponent } from './page-mvmtstk.component';

describe('PageMvmtstkComponent', () => {
  let component: PageMvmtstkComponent;
  let fixture: ComponentFixture<PageMvmtstkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMvmtstkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMvmtstkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
