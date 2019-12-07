/**
 * Frontpage Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { UploadService } from 'app/shared/upload.service';

/**
 * This is the frontpage component and it displays a couple of
 * fields for the user to add information and images to a new case.
 */
@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})

export class FrontpageComponent implements OnInit {

  /** are form values valid */
  public isValid: boolean;
  /** is image uploaded locally */
  public isUploaded: boolean;
  /** boolean for choosing whether to display save button or not */
  public isSummary: boolean;

  /**
   * The text attributes for the cards
   */
  private formTitle: String;
  private formDescription: String;
  private imageCardTitle: String;
  private imageCardDescription: String;
  private title: string;
  private description: string;
  private pageHeader: String;



  constructor() {}




  /**
    * sets boolean isValid to same value as in child component card-form.component
    * @param {boolean} isValid 
    */
  public setValidity(isValid: boolean): void {
    this.isValid = isValid;
  }



  /**
    * sets boolean isUploaded to same value as in child component card-image.component
    * @param {boolean} isUploaded 
    */
  public setUploadBoolean(isUploaded: boolean): void {
    this.isUploaded = isUploaded;
  }

  /**
   * Sets the text attributes and validation booleans.
   */
  ngOnInit() {
    this.pageHeader = "Anmäl brännskada";
    this.isValid = false;
    this.isUploaded = false;
    this.title = "Hämta ditt ärende";
    this.description ="Här kan du hämta information om ett ärende du tidigare skickat in, genom att skriva in ditt ärendenummer och klicka på “Hämta”.";

    this.formTitle = "Kontaktuppgifter";
    this.formDescription = "Här fyller du som avsändare i dina kontaktuppgifter.";
    this.imageCardTitle = "Ladda upp bild";
    this.imageCardDescription = "Här kan du ladda upp bilder eller ta bilder med kameran. Tryck på “Välj bild” för att börja.";
  }
}
