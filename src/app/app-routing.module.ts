import { authGuard } from './Core/guards/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', canActivate:[authGuard]  , loadChildren:()=> import ('./blank/blank.module').then((m)=>m.BlankModule) },
  {path: '', loadChildren:()=> import ('./auth/auth.module').then((m)=>m.AuthModule) },
  {path:'**' , component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
