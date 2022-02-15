import { Component, OnInit } from "@angular/core";
import { StoryblokService } from "../storyblok.service";
import { Components } from "../components";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-hotelbydeal",
  templateUrl: "./hotelbydeal.component.html",
})
export class HotelByDealComponent implements OnInit {
  story = { content: null, name: "" };
  components = Components;

  constructor(
    private storyblokService: StoryblokService,
    private readonly activeRoute: ActivatedRoute
  ) {
    window.storyblok.init();
    window.storyblok.on(["change", "published"], function () {
      location.reload();
    });
  }

  ngOnInit() {
    this.storyblokService.getStories({ version: "draft" }).then(console.log);
    this.storyblokService
      .getStory("deals/hotels", { version: "published" })
      .then((data) => (this.story = data.story));
  }
}
