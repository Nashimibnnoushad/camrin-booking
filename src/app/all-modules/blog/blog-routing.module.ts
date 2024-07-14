import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [{ path: '', component: BlogComponent,
children: [
  {path: 'blog-list', component: BlogListComponent, data: { breadcrumb: 'blog list' }},
  {path: 'blog-grid', component: BlogGridComponent, data: { breadcrumb: 'blog grid' }},
  {path: 'blog-details', component: BlogDetailsComponent, data: { breadcrumb: 'blog details' }}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
