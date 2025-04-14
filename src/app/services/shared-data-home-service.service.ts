import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataHomeServiceService {

  private filterTable =  new BehaviorSubject<number | null>(null);
  selectedEntity$ = this.filterTable.asObservable();

  setSelectedEntity(id: number){
    this.filterTable.next(id);
  }

  constructor() { }
}
