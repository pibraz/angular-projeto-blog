import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { QuemsouComponent } from './pages/quemsou/quemsou.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'content/:id',
  component:ContentComponent
},
{
  path:'quemsou',
  component:QuemsouComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
