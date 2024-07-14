import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogGridComponent,
    BlogDetailsComponent,
    BlogSidebarComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
