import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule,BsDropdownModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { JambotrnComponent } from './jambotrn/jambotrn.component';
import { FirstComponent } from './first/first.component';
import { NavBarNewComponent } from './nav-bar-new/nav-bar-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JambotrnComponent,
    FirstComponent,
    NavBarNewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
