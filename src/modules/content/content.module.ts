import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { HomeComponent } from './home/home.component';
import { View404Component } from './view404/view404.component';
import {ButtonModule} from 'primeng/button';
import { ContentComponent } from './content.component';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {FieldsetModule} from 'primeng/fieldset';
import { LocationComponent } from './location/location.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [HomeComponent, View404Component, ContentComponent, LocationComponent, BlogComponent, ServicesComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ButtonModule,
    CardModule,
    ScrollPanelModule,
    FieldsetModule,
    
  ]
})
export class ContentModule { }
