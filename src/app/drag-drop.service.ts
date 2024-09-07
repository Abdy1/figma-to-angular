import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  constructor() { }

  private dragData = new Subject<any>();
  dragData$ = this.dragData.asObservable();

  setDragData(data: any) {
    this.dragData.next(data);
  }
}
