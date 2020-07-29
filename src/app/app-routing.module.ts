import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AndhraComponent } from './andhra/andhra.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { StatesComponent } from './states/states.component';


const routes: Routes = [
  {path: '', component: StatesComponent},
  {path: 'andhra', component: AndhraComponent},
  {path: 'telangana', component: TelanganaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
