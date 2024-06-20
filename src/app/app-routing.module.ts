import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AraBeatComponent } from './ara-beat/ara-beat.component';
import { NhComponent } from './nh/nh.component';
import { JlComponent } from './jl/jl.component';
import { RfamComponent } from './rfam/rfam.component';
import { AccComponent } from './acc/acc.component';


const routes: Routes = [
  { path: 'acc', component: AccComponent },
  { path: 'rfam', component: RfamComponent },
  { path: 'jl', component: JlComponent },
  { path: 'nh', component: NhComponent },
  { path: 'ara', component: AraBeatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
