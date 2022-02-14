import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-storytelling",
  templateUrl: "./storytelling.component.html",
  styleUrls: ["./storytelling.component.css"],
})
export class StoryTellingComponent implements OnInit {
  @Input() content: string;
  @Input() _editable: any;

  constructor() {}

  ngOnInit() {}
}
