import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvmtStkComponent } from './detail-mvmt-stk.component';

describe('DetailMvmtStkComponent', () => {
  let component: DetailMvmtStkComponent;
  let fixture: ComponentFixture<DetailMvmtStkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMvmtStkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMvmtStkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
