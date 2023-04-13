import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponentsComponent } from './text-components/text-components.component';
import { ImageCompoentsComponent } from './image-compoents/image-compoents.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponentsComponent,
    ImageCompoentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
