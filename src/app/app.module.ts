import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './authorized/components/homepage/homepage.component';
import { ProjectsComponent } from './authorized/components/projects/projects.component';
import { BlogsComponent } from './authorized/components/blogs/blogs.component';
import { ContactComponent } from './authorized/components/contact/contact.component';
import { AboutComponent } from './authorized/components/about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectsComponent,
    BlogsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
