import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocContent } from './doc-content';

describe('DocContent', () => {
  let component: DocContent;
  let fixture: ComponentFixture<DocContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
