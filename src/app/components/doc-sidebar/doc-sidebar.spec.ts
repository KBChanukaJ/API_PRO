import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSidebar } from './doc-sidebar';

describe('DocSidebar', () => {
  let component: DocSidebar;
  let fixture: ComponentFixture<DocSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
