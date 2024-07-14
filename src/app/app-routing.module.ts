import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '', loadChildren: () => import('./all-modules/all-modules.module').then(m => m.AllModulesModule) },
    { path: '**', redirectTo:'', component:HomeComponent},
    { path:'', redirectTo:'Home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
