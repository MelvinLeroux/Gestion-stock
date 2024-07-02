import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvmtStkArticleComponent } from './detail-mvmt-stk-article.component';

describe('DetailMvmtStkArticleComponent', () => {
  let component: DetailMvmtStkArticleComponent;
  let fixture: ComponentFixture<DetailMvmtStkArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailMvmtStkArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMvmtStkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
