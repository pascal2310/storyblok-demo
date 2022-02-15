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
    const url = this.activeRoute.snapshot.url;

    this.storyblokService.getStories({ version: "draft" }).then(console.log);
    this.storyblokService
      .getStory(`${url[0].path}/${url[1].path}/${url[2].path}`, {
        version: "draft",
      })
      .then((data) => (this.story = data.story));
  }
}
