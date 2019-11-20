/**
 * Service for storing local data 
 * @author Albin Lindén <albli248@student.liu.se>
 * @author Henrik Johansson <henjo114@student.liu.se>
 */

import { Component, OnInit } from '@angular/core';
import { CaseDataService } from '../../case-data.service';
import { Case } from 'app/models/case';
import { Image } from 'app/models/image';
import { HttpService } from 'app/shared/http.service';
import { Lightbox } from 'ngx-lightbox';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../modal/modal.component';
import { ModalfilesizemessageComponent } from '../../../modalfilesizemessage/modalfilesizemessage.component';

/**
 * A component for selecting, previewing and deleteing images before upload 
 */
@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})

export class CardImageComponent implements OnInit {
  private _album: any = [];

/**
 * Creates an instance of CaseDataService and a private instance of Lightbox
 * Sets imagepreview to an array
 * Loads images if there are any stored in the Case
 */
  constructor(public dataService: CaseDataService, public _lightbox: Lightbox, private modalService: NgbModal) {
    this.imagePreview = [];
    this.loadImages();
   }
 
 image : Image;
 imagePreview: any;
 imageCounter = this.dataService.getCase().images.length -1;
 imagesAvailable = false;
 src: any;

/**
 * This method is called when an image is choosen in the file select dialog in the browser. 
 * The method stores the images in CaseDataService.
 * @param {event} This is the file that is choosen in the file select dialog
 */
saveImageToCase(event){

  if(event.target.files[0].size > 4194304) {
    alert("The size of the image exceeds the allowed limit of 4 megabytes.");
    open();
    return;
  }

  if(this.dataService.getCase().images.length > 5) {
    alert("Only 6 images are allowed to be uploaded for each case. Remove one of the existing images before adding another image.");
    return;
  }

  this.image = new Image;
  this.image.file = event.target.files[0];


  this.dataService.getCase().images.push(this.image);

  this.addImage();
}

/**
 * Removes the selected image from the Case and the local array _album that is responsible for enlarging the images
 * with Lightbox
 * @param {number} This is the index in the Case image array of the image that is to be deleted
 */
removeImage(index: number){
  this.dataService.getCase().images.splice(index, 1);
  this._album.splice(index, 1);
  this.loadImages();
  this.imageCounter--;
}

/**
 * Method to open the file select dialog. The method is called from a button in the HTML
 */
openFileSelect() {
  let element: HTMLElement = document.getElementsByClassName('upload-input')[0] as HTMLElement;
  element.click();
}

/**
 * A method responsible for previewing selected images.
 * The method converts a selected image to a string that is readable as an image by the HTML
 * The method also adds the image to the Lightbox gallery so they can be enlarged
 */
addImage() {
    this.imageCounter++;
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview[this.imageCounter] = reader.result;
    this.src = reader.result;
    const album = {
      src: this.src
   };

   this._album.push(album);
    };
    reader.readAsDataURL(this.dataService.getCase().images[this.imageCounter].file);
}

/**
 * A method responsible for previewing selected images.
 * This method loads all images from the Image array in Case Data and add them to the HTML. Used when navigating back from
 * summary to the frontpage to correctly display the images. It is also used when removing an image from the preview to reload all
 * remaining images correctly.
 */
loadImages() {
    this.imagePreview = [];
    this._album = [];
    for (let i = 0; i < this.dataService.getCase().images.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
      this.imagePreview[i] = reader.result;
      this.src = reader.result;
      const album = {
      src: this.src
      };

      this._album.push(album);
      };
      reader.readAsDataURL(this.dataService.getCase().images[i].file);


    }
}

/**
 * This method is called when clicking on an image to show an enlarged version over the rest of the page.
 * @param {number} This is the index in the _album array where the image is stored. The variable is used so that the lightbox
 * knows which image to display. 
 * 
 */
enlargeImage(index: number): void {
  this._lightbox.open(this._album, index);
}

open() {
  // const modalRef = this.modalService.open(ModalComponent);
  const modalRef = this.modalService.open(ModalfilesizemessageComponent);
  modalRef.componentInstance.title = 'About';
}

  ngOnInit() {
  }

}