import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCmdCltFrnComponent } from './page-cmd-clt-frn.component';

describe('PageCmdCltFrnComponent', () => {
  let component: PageCmdCltFrnComponent;
  let fixture: ComponentFixture<PageCmdCltFrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCmdCltFrnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCmdCltFrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
