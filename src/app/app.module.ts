import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MastheadComponent } from './masthead/masthead.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MastheadComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
