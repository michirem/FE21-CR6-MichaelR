import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { FooterComponent } from './footer/footer.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    BlogComponent,
    HomeComponent,
    TravelsComponent,
    FooterComponent,
    TravelDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
