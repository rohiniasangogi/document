import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecentDocComponent } from './recent-doc/recent-doc.component';
import { UploadDocComponent } from './upload-doc/upload-doc.component';
import { CreateDocComponent } from './create-doc/create-doc.component';
import { DeleteDocComponent } from './delete-doc/delete-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecentDocComponent,
    UploadDocComponent,
    CreateDocComponent,
    DeleteDocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
