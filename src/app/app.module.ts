import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { SectionTestComponent } from './components/section-test/section-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent,
    SectionTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
