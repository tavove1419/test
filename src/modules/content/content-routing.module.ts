import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/modules/content/home/home.component'
import { BlogComponent } from './blog/blog.component';
import { ContentComponent } from './content.component';
import { LocationComponent } from './location/location.component';
import { ServicesComponent } from './services/services.component';



const routes: Routes = [
  {path: '', component: ContentComponent, children: [
    {path: 'inicio', component: HomeComponent},
    {path: 'location', component: LocationComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'services', component: ServicesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
