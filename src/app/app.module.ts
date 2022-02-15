import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DynamicModule } from "ng-dynamic-component";
import { AppComponent } from "./app.component";
import { StoryblokService } from "./storyblok.service";
import { StoryblokDirective } from "./storyblok.directive";
import { TeaserComponent } from "./teaser/teaser.component";
import { GridComponent } from "./grid/grid.component";
import { PageComponent } from "./page/page.component";
import { FeatureComponent } from "./feature/feature.component";
import { StoryTellingComponent } from "./storytelling/storytelling.component";
import { AppRoutingModule } from "./app.routing.module";
import { DealsComponent } from "./pages/deals.component";
import { HotelByDealComponent } from "./pages/hotelbydeal.component";
import { DealComponent } from "./pages/deal.component";
import { HomeComponent } from "./pages/home.component";

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StoryblokDirective,
    TeaserComponent,
    GridComponent,
    FeatureComponent,
    StoryTellingComponent,
    HomeComponent,
    DealComponent,
    DealsComponent,
    HotelByDealComponent,
  ],
  imports: [BrowserModule, DynamicModule, AppRoutingModule],
  exports: [BrowserModule, DynamicModule],
  providers: [StoryblokService],
  bootstrap: [AppComponent],
})
export class AppModule {}
