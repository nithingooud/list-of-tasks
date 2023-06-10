import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService,private route:ActivatedRoute) { }
  listId!:any;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId=params.listId;
      console.log(params);
    })
  }

  createNewTask(title: string) {
    this.taskService.createTask(title,this.listId).subscribe((res: any) => {
      console.log(res);
    })
  }
}
