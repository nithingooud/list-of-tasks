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

  createTask(title: string,listId:string) {
    return this.webreqservice.post(`lists/${listId}/tasks`, { title });
  }

  getLists() {
    return this.webreqservice.get('lists');
  }
  getTasks(listId: string) {
    return this.webreqservice.get(`lists/${listId}/tasks`)
  }

}
