import { Component, Input, OnInit } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Component({
  selector: 'app-dropable-area',
  templateUrl: './dropable-area.component.html',
  styleUrls: ['./dropable-area.component.css']
})
export class DropableAreaComponent implements OnInit {
  @Input() draggableItem: any; 
  dragData: any;
  showForm:boolean = false;

  formPlaceholders: any[] =  [

  ];

  menus:any[] = []
  // showForm: boolean = false;
  currentLayout:string = "";

  constructor(private dragDropService: DragDropService) {}
  ngOnInit(): void {
    this.dragDropService.dragData$.subscribe(data => {
      this.dragData = data;
    });
    this.menus =  [
      {
        label: '<img src="assets/4.png" alt="Home" class="menu-icon">',
        command: () => this.toggleView('layout-1')
      },
      {
        label: '<img src="assets/5.png" alt="Home" class="menu-icon">',
        command: () => this.toggleView('layout-2')
      },
      {
        label: '<img src="assets/6.png" alt="Home" class="menu-icon">',
        command: () => this.toggleView('layout-3')
      },
      {
        label: '<img src="assets/7.png" alt="Home" class="menu-icon">',
        command: () => this.toggleView('layout-4')
      },
      {
        label: '<img src="assets/8.png" alt="Home" class="menu-icon">',
        command: () => this.toggleView('layout-5')
      },
      {
        label: '<img src="assets/9.png" alt="Home" class="menu-icon">',
        command: () => this.toggleView('layout-6')
      },
      {
        label: '<img src="assets/10.png" alt="Home" class="menu-icon">',
        command: () => this.toggleView('layout-7')
      },
      {
        label: '<img src="assets/11.png" alt="Home" class="menu-icon">',
        command: () => this.toggleView('layout-8')
      },
      {
        label: '<img src="assets/12.png" alt="Home" class="menu-icon">',
        command: () => this.toggleView('layout-9')
      }
    ];

    
  }
  toggleView(layout: string) {
    this.showForm = !this.showForm; // Toggle between menu and form
    this.currentLayout = layout;

  }
  drop() {
    if(this.currentLayout == 'layout-1'){
      this.formPlaceholders.push(this.draggableItem);
    }

  }

  handleItemDragged(item: any) {
    if (this.showForm) {
      this.formPlaceholders.push(item);
    }
  }
  
  onDrop(event: any) {
    const droppedItem = event.dragData;
    if (droppedItem) {
      this.formPlaceholders.push(droppedItem);
    }
  }
  allowDrop(event: DragEvent) {
    event.preventDefault();
  }
  


}
