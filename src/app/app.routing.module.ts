import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { DealComponent } from "./pages/deal.component";
import { DealsComponent } from "./pages/deals.component";
import { HomeComponent } from "./pages/home.component";
import { HotelByDealComponent } from "./pages/hotelbydeal.component";

const routes: Routes = [
  {
    path: "deals/:id/:id",
    component: HotelByDealComponent,
  },
  {
    path: "deals/:id",
    component: DealComponent,
  },
  {
    path: "deals",
    component: DealsComponent,
  },
  { path: "", component: HomeComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
