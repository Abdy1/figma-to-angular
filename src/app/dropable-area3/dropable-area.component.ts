import { Component, Input, OnInit } from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Component({
  selector: 'app-dropable-area4',
  templateUrl: './dropable-area.component.html',
  styleUrls: ['./dropable-area.component.css']
})
export class DropableAreaComponent4 implements OnInit {
  @Input() draggableItem: any; 
  dragData: any;
  showForm:boolean = false;

  first: any[] =  [];


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
      this.first = []
    }
    if((this.currentLayout == 'layout-2' ||this.currentLayout == 'layout-3' ) && this.first.length%2==0 ){
      this.first.pop();
    }
    if((this.currentLayout == 'layout-4' ||this.currentLayout == 'layout-5' ||this.currentLayout == 'layout-6' ||this.currentLayout == 'layout-7' ||this.currentLayout == 'layout-8') && this.first.length%3==0 ){
      this.first.pop();
    }
    if(this.currentLayout == 'layout-9' && this.first.length%4==0 ){
      this.first.pop();
    }



    this.first.push(this.draggableItem);


  }


  


  


}
