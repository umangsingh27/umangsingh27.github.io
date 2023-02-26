import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeViewerComponent } from './resume-viewer/resume-viewer.component';

const routes: Routes = [
  { path: 'about', title: 'About', component: AboutComponent},
  { path: 'projects', title: 'Projects', component: ProjectsComponent},
  { path: 'projects/:archived', title: 'Archived Projects', component: ProjectsComponent},
  { path: 'contact', title: 'Contact', component: ContactComponent},
  { path: 'resume', title: 'Resume', component: ResumeViewerComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', title: 'Umang Singh', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
