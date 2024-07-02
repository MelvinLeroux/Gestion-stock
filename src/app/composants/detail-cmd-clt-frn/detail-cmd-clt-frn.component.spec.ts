import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdCltFrnComponent } from './detail-cmd-clt-frn.component';

describe('DetailCmdCltFrnComponent', () => {
  let component: DetailCmdCltFrnComponent;
  let fixture: ComponentFixture<DetailCmdCltFrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCmdCltFrnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCmdCltFrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
