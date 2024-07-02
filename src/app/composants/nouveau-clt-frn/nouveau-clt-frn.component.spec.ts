import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCltFrnComponent } from './nouveau-clt-frn.component';

describe('NouveauCltFrnComponent', () => {
  let component: NouveauCltFrnComponent;
  let fixture: ComponentFixture<NouveauCltFrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveauCltFrnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauCltFrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
