import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { HttpClient } from '@angular/common/http';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path:'login-page',
    component:LoginPageComponent
  },
  {
    path: 'new-list',
    component: NewListComponent
  },
  {
    path: 'lists',
    component: TaskViewComponent
  },
  {
    path: 'lists/:listId',
    component: TaskViewComponent
  },
  {
    path: 'lists/:listId/new-task',
    component: NewTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
