import { Component, OnInit } from "@angular/core";
import { StoryblokService } from "../storyblok.service";
import { Components } from "../components";

@Component({
  selector: "app-home",
  template: `
    <h1>HomePage</h1>
    <div *ngIf="story.content">
      <ndc-dynamic
        [ndcDynamicComponent]="components[story.content.component]"
        [ndcDynamicInputs]="story.content"
      >
      </ndc-dynamic>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  story = { content: null, name: "" };
  components = Components;

  constructor(private storyblokService: StoryblokService) {
    window.storyblok.init();
    window.storyblok.on(["change", "published"], function () {
      location.reload();
    });
  }

  ngOnInit() {
    this.storyblokService.getStories({ version: "draft" }).then(console.log);
    this.storyblokService
      .getStory("home", { version: "draft" })
      .then((data) => (this.story = data.story));
  }
}
