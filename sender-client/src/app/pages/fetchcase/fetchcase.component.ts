import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fetchcase",
  templateUrl: "./fetchcase.component.html",
  styleUrls: ["./fetchcase.component.scss"]
})
export class FetchcaseComponent implements OnInit {
  private pageHeader: String;
  constructor() {}

  ngOnInit() {
    this.pageHeader = "Ärendehantering";
  }
}
