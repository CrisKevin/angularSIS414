import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { InfoComponent } from './page/info/info.component';
import { CasaComponent } from './component/casa/casa.component';
import { BlogComponent } from './component/blog/blog.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'info', component:InfoComponent},
  {path:'contact', component:ContactComponent},
  {path:'home', component:CasaComponent},
  {path:'blog',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }