import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedData: any;
  dataUpdated: EventEmitter<any> = new EventEmitter<any>();

  updateData(data: any) {
    this.sharedData = data;
    this.dataUpdated.emit(data);
  }
}
