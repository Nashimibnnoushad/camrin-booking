import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';

const routes: Routes = [{ path: '', component: AllModulesComponent,
children:[
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }, 
  { path: 'speakers', loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersModule) }, 
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
]
}, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllModulesRoutingModule { }
