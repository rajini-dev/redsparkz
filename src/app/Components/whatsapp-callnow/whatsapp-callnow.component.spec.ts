import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappCallnowComponent } from './whatsapp-callnow.component';

describe('WhatsappCallnowComponent', () => {
  let component: WhatsappCallnowComponent;
  let fixture: ComponentFixture<WhatsappCallnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsappCallnowComponent]
    });
    fixture = TestBed.createComponent(WhatsappCallnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
