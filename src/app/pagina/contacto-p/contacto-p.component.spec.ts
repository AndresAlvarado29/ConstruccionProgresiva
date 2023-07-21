import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPComponent } from './contacto-p.component';

describe('ContactoPComponent', () => {
  let component: ContactoPComponent;
  let fixture: ComponentFixture<ContactoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
