import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'about', title: 'About', component: AboutComponent},
  { path: 'projects', title: 'projects', component: ProjectsComponent},
  { path: 'contact', title: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', title: 'Umang Singh', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
