/**
 * Frontpage Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from "@angular/core";
import { Routes } from "@angular/router";
import { UploadService } from "app/shared/upload.service";

@Component({
  selector: "frontpage",
  templateUrl: "./frontpage.component.html",
  styleUrls: ["./frontpage.component.scss"]
})
export class FrontpageComponent implements OnInit {
  private pageHeader: String;
  // are form values valid
  public isValid: boolean;
  // is image uploaded locally
  public isUploaded: boolean;

  constructor() {}

  /**
   * sets boolean isValid to same value as in child component card-form.component
   */
  public setValidity(isValid: boolean): void {
    this.isValid = isValid;
  }

  /**
   * sets boolean isUploaded to same value as in child component card-image.component
   */
  public setUploadBoolean(isUploaded: boolean): void {
    this.isUploaded = isUploaded;
  }

  ngOnInit() {
    this.pageHeader = "Anmäl brännskada";
    this.isValid = false;
    this.isUploaded = false;
  }
}
