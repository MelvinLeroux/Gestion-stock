import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCmdCltFrnComponent } from './nouvelle-cmd-clt-frn.component';

describe('NouvelleCmdCltFrnComponent', () => {
  let component: NouvelleCmdCltFrnComponent;
  let fixture: ComponentFixture<NouvelleCmdCltFrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleCmdCltFrnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCmdCltFrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
