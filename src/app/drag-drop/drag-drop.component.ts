import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DragDropService } from '../drag-drop.service';
import { DropableAreaComponent } from '../dropable-area/dropable-area.component';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css'],
  styles: [
    `:host ::ng-deep {
        [pDraggable] {
            cursor: move;
        }
    }`
  ]
})


export class DragDropComponent implements OnInit {
  @ViewChild('dropableArea') dropableArea!: DropableAreaComponent;
  constructor(private dragDropService: DragDropService) { }

  formItems: any[] = [];
  draggedItem: any = null;

  menus: MenuItem[] | undefined;
  @Output() itemDragged = new EventEmitter<any>();

  availableItems: any[] | undefined;
  selectedItems: any[] | undefined;
  areas: any[] | undefined;

  // course details
  // Course Code, Course Title

  // Semester/Trimester Details
  // Semester/Trimester Name, Start Date 

  ngOnInit(): void {


    this.areas = [
      {
        label: "Course Details",
        fields: ["Course Code", "Course Title"]
      },
      {
        label: "Semester/Trimester Details",
        fields: ["Semester/Trimester Name", "Start Date"]
      },
      {
        label: "Overall Academic Performance",
        fields: ["Cumulative Grade Point Average (CGPA)", "Total Credit Hours"]
      },
      {
        label: "Degree/Certificate Information",
        fields: ["Degree/Certificate Title", "Degree/Certificate Conferred Date"]
      },
      {
        label: "Signature and Seal",
        fields: ["Authorized Signatory", "Institution Official Seal"]
      },
      {
        label: "Additional Information",
        fields: ["Academic Honors", "Extracurricular Activities"]
      },
      {
        label: "Extras",
        fields: ["Data Type", "Text"]
      }
    ];
    this.selectedItems = [];
    this.availableItems = [
      { placeholder: 'First Name' },
      { placeholder: 'Last Name' },
      { placeholder: 'Email Address' },
      { placeholder: 'Phone Number' },
      { placeholder: 'Address' },
      { placeholder: 'City' },
      { placeholder: 'State' },
      { placeholder: 'Zip Code' },
      { placeholder: 'Country' }
    ];
    this.menus = [
      {


        label: '<img src="assets/Orientation.png" alt="Home" class="menu-icon">',
      },
      {
        label: '<img src="assets/2.png" alt="Home" class="menu-icon">',

      },
      {
        label: '<img src="assets/3.png" alt="Home" class="menu-icon">',
      }
    ]
  }
  ngAfterViewInit() {
    // Ensure the child component is available
    console.log('DropableComponent:', this.dropableArea);
  }






  drop() {
    console.log('Parent: Dropped Item:', this.draggedItem);
    if (this.draggedItem) {
      this.selectedItems = [...(this.selectedItems as any[]), this.draggedItem];
      // Pass the dragged item to the child component before calling its drop method
      this.dropableArea.draggableItem = this.draggedItem;
      this.draggedItem = null;
    }

    if (this.dropableArea) {
      this.dropableArea.drop(); // Call the drop method in the child component
    }
  }




  dragStart(product: any) {
    console.log(product)
    this.draggedItem = product;
  }

  dragEnd() {
    this.draggedItem = null;
  }
  
}
