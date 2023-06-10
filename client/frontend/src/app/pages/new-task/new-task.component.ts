import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  listId: any;

  constructor(private taskService: TaskService,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.listId= params.get('listId');
    })
  }
  createNewTask(title: string) {
    this.taskService.createTask(title,this.listId).subscribe((res: any) => {
      console.log("kkkkkkkkkkkkkkkkkkkk");
    })
  }
}
