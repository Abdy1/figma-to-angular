import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FooterComponent } from './footer/footer.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { LayoutComponent } from './layout/layout.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { DropableAreaComponent } from './dropable-area/dropable-area.component';
import { DropableAreaComponent2 } from './dropable-area1/dropable-area.component';
import { DropableAreaComponent3 } from './dropable-area2/dropable-area.component';
import { DropableAreaComponent4 } from './dropable-area3/dropable-area.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DragDropComponent,
    
    FooterComponent,
    LayoutComponent,
    DropableAreaComponent,
    DropableAreaComponent2,
    DropableAreaComponent3,
    DropableAreaComponent4
  ],
  imports: [
    BrowserModule,
    OverlayPanelModule,
    MenubarModule,
    ButtonModule,
    DragDropModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
