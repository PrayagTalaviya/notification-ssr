import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutasComponent } from './aboutas/aboutas.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'aboutas',
    component:AboutasComponent,
  },
  {
    path:'message',
    component:MessageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
