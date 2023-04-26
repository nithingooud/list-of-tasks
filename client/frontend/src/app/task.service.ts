import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webreqservice: WebRequestService) { }

  createList(title: string) {
    return this.webreqservice.post('lists', { title });
  }

  getLists() {
    return this.webreqservice.get('lists');
  }

}