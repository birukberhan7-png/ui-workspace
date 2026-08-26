import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {
  @Input() label = 'Date';

  @Input() value = '';

  @ViewChild('dateInput')
  dateInput!: ElementRef<HTMLInputElement>;

  openCalendar() {

    if (this.dateInput.nativeElement.showPicker) {
      this.dateInput.nativeElement.showPicker();
    } else {
      this.dateInput.nativeElement.focus();
      this.dateInput.nativeElement.click();
    }

  }
}
