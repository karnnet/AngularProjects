import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';
import { AppComponent } from './app.component';
import { HighlightDirective } from './CustomDirective/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,SetBackgroundDirective, HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
