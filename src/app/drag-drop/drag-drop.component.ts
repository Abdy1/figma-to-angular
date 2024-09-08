import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DragDropService } from '../drag-drop.service';
import { DropableAreaComponent } from '../dropable-area/dropable-area.component';
import { DropableAreaComponent2 } from '../dropable-area1/dropable-area.component';
import { DropableAreaComponent3 } from '../dropable-area2/dropable-area.component';
import { DropableAreaComponent4 } from '../dropable-area3/dropable-area.component';

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
  @ViewChild('dropableArea2') dropableArea2!: DropableAreaComponent2;
  @ViewChild('dropableArea3') dropableArea3!: DropableAreaComponent3;
  @ViewChild('dropableArea4') dropableArea4!: DropableAreaComponent4;
  constructor(private dragDropService: DragDropService) { }

  formItems: any[] = [];
  draggedItem: any = null;

  menus: MenuItem[] | undefined;
  @Output() itemDragged = new EventEmitter<any>();

  availableItems: any[] | undefined;
  areas: any[] | undefined;


  ngOnInit(): void {


    this.areas = [
      {
        label: "Course Details",
        fields: ["Course Code", "Course Title","Date of Birth","Gender"]
      },
      {
        label: "Semester/Trimester Details",
        fields: ["Semester/Trimester Name", "Start Date","Institution Address","Accreditation Information"]
      },
      {
        label: "Overall Academic Performance",
        fields: ["Cumulative Grade Point Average (CGPA)", "Total Credit Hours","Department","Faculty"]
      },
      {
        label: "Degree/Certificate Information",
        fields: ["Degree/Certificate Title", "Degree/Certificate Conferred Date","Honors/Awards"]
      },
      {
        label: "Signature and Seal",
        fields: ["Authorized Signatory", "Institution Official Seal"]
      },
      {
        label: "Additional Information",
        fields: ["Academic Honors", "Extracurricular Activities","Course Credit Hours"," Course Grade"]
      },
      {
        label: "Extras",
        fields: ["Data Type", "Text","Line"]
      }
    ];
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






  drop() {
    if (this.draggedItem) {
      this.dropableArea.draggableItem = this.draggedItem;
      this.draggedItem = null;
    }

    if (this.dropableArea) {
      this.dropableArea.drop(); 
    }
  }

  drop2() {
    if (this.draggedItem) {
      this.dropableArea2.draggableItem = this.draggedItem;
      this.draggedItem = null;
    }

    if (this.dropableArea2) {
      this.dropableArea2.drop(); 
    }
  }
  drop3() {
    if (this.draggedItem) {
      this.dropableArea3.draggableItem = this.draggedItem;
      this.draggedItem = null;
    }

    if (this.dropableArea3) {
      this.dropableArea3.drop(); 
    }
  }
  drop4() {
    if (this.draggedItem) {
      this.dropableArea4.draggableItem = this.draggedItem;
      this.draggedItem = null;
    }

    if (this.dropableArea4) {
      this.dropableArea4.drop(); 
    }
  }



  dragStart(product: any) {
    this.draggedItem = product;
  }

  dragEnd() {
    this.draggedItem = null;
  }
  
}
