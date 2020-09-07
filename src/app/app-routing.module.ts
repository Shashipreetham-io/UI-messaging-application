import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { AddroomComponent } from './addroom/addroom.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AddpostComponent } from './addpost/addpost.component';

const routes: Routes = [
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'roomlist',component:RoomlistComponent},
{path:'addroom',component:AddroomComponent},
{path:'chatroom/:roomname',component:ChatroomComponent},
{path:'addpost',component:AddpostComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
