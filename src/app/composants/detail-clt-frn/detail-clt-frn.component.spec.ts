import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCltFrnComponent } from './detail-clt-frn.component';

describe('DetailCltFrnComponent', () => {
  let component: DetailCltFrnComponent;
  let fixture: ComponentFixture<DetailCltFrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCltFrnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCltFrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
