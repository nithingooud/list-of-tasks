import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
<<<<<<< HEAD
import { ActivatedRoute,Params } from '@angular/router';
=======
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
>>>>>>> f221c2397f2eb519cf27f41283d954cef79b73fd

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  listId: any;

  constructor(private taskService: TaskService,private route:ActivatedRoute) { }
<<<<<<< HEAD
  listId!:any;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId=params.listId;
      console.log(params);
=======
 
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.listId= params.get('listId');
>>>>>>> f221c2397f2eb519cf27f41283d954cef79b73fd
    })
  }

  createNewTask(title: string) {
    this.taskService.createTask(title,this.listId).subscribe((res: any) => {
<<<<<<< HEAD
      console.log(res);
=======
      console.log("kkkkkkkkkkkkkkkkkkkk");
>>>>>>> f221c2397f2eb519cf27f41283d954cef79b73fd
    })
  }
}
