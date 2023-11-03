import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { InfoComponent } from './page/info/info.component';
import { HeaderComponent } from './comons/header/header.component';
import { FooterComponent } from './comons/footer/footer.component';
import { BlogComponent } from './component/blog/blog.component';
import { CasaComponent } from './component/casa/casa.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    InfoComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    CasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
