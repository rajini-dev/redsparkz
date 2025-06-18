import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-callnow',
  templateUrl: './whatsapp-callnow.component.html',
  styleUrls: ['./whatsapp-callnow.component.scss']
})
export class WhatsappCallnowComponent {
  @Input() message: string = 'Hello! I would like to enquire about your services.';
  whatsappNumber: string = '919600313573'; // Country code included
  whatsappUrl: string = '';

  ngOnChanges(): void {
    const encodedMessage = encodeURIComponent(this.message);
    this.whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }


}
