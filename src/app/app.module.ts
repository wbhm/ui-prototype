import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomMaterialModule } from './core/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageComponent } from './components/page/page.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageComponent,
    PageContentComponent,
    LeftNavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
