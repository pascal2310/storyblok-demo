import { Component, OnInit } from "@angular/core";
import { StoryblokService } from "../storyblok.service";
import { Components } from "../components";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-deals",
  templateUrl: "./deals.component.html",
})
export class DealsComponent implements OnInit {
  story = { content: null, name: "" };
  components = Components;

  constructor(
    private storyblokService: StoryblokService,
    public activeRoute: ActivatedRoute
  ) {
    window.storyblok.init();
    window.storyblok.on(["change", "published"], function () {
      location.reload();
    });
  }

  ngOnInit() {
    console.log(this.activeRoute.params);
    this.storyblokService.getStories({ version: "draft" }).then(console.log);
    this.storyblokService
      .getStory("deals", { version: "draft" })
      .then((data) => (this.story = data.story));
  }
}
