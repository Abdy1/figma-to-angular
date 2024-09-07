import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentPage = 1;

  onPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onNext() {
    this.currentPage++;
  }

  onAddPage() {
    // Logic to add a new page
  }
}
