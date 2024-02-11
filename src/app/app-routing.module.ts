import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './authorized/components/homepage/homepage.component';
import { ProjectsComponent } from './authorized/components/projects/projects.component';
import { BlogsComponent } from './authorized/components/blogs/blogs.component';
import { ContactComponent } from './authorized/components/contact/contact.component';
import { AboutComponent } from './authorized/components/about/about.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  {path: 'projects', component: ProjectsComponent},
  {path: 'blogs', component: BlogsComponent },
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
