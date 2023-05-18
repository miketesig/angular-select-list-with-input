import { style } from '@angular/animations';
import { Component, Directive, ElementRef, HostListener } from '@angular/core';

interface Item {
  code: string;
  text: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public items: Item[] = [
    { code: '1', text: 'Item 21' },
    { code: '2', text: 'Itam AAs12' },
    { code: '3', text: 'Itiz 3' },
    { code: '4', text: 'Item 422' },
  ];

  selectedItemIndex = 0;
  searchInput = '';
  selectedData: { code: string; text: string };

  selectedItem: Item | null = null;

  get filteredItems(): Item[] {
    if (this.searchInput.trim() === '') {
      return this.items;
    }
    const lowerCaseSearchText = this.searchInput.toLowerCase();
    return this.items.filter(
      (item) =>
        item.text.toLowerCase().includes(lowerCaseSearchText) ||
        item.code.toLowerCase().includes(lowerCaseSearchText)
    );
  }

  selectItem(item: Item): void {
    this.selectedItem = item;
  }

  handleKeyup(event) {
    switch (event.key) {
      case 'ArrowUp': {
        this.selectedItemIndex = Math.max(0, this.selectedItemIndex - 1);
        break;
      }

      case 'ArrowDown': {
        this.selectedItemIndex++;
        let maxLenght = this.items.length - 1;
        if (this.filteredItems) {
          maxLenght = this.filteredItems.length - 1;
        }
        if (this.selectedItemIndex > maxLenght) {
          this.selectedItemIndex = maxLenght;
        }
        break;
      }

      case 'Enter': {
        this.selectedData = this.items[this.selectedItemIndex];

        break;
      }

      case 'ArrowLeft':
        break;
      case 'ArrowRight':
        break;

      default: {
        break;
      }
    }
  }
}
