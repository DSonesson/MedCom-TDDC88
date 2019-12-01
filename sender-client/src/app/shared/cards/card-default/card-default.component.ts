import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CaseDataService } from '../../case-data.service';
import { Case } from '../../../models/case';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss']
})

export class CardDefaultComponent implements OnInit {

  case: Case;
  imagePreview: any;
  private _album: any = [];
  src: any;
  @Output() displayForm = new EventEmitter<boolean>();

  /**
   * The title and description of the card 
   */
  @Input ("title") title: String;
  @Input ("description") description: String;

  constructor(public dataService: CaseDataService, public _lightbox: Lightbox) {
    this.case = this.dataService.getCase();
   // console.log(this.case.randomtest);
    this.imagePreview = [];
    this.loadImages();
  }

/**
    * Emits a boolean to summary page so summary page knows which component to display.
    * 
    */
setDisplayForm() {

  this.displayForm.emit(true);
  }

  removeImage(index: number){
    this.dataService.getCase().images.splice(index, 1);
    this._album.splice(index, 1);
    this.loadImages();
    // this.imageCounter--;
  }

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

  enlargeImage(index: number): void {
    this._lightbox.open(this._album, index);
  }

  ngOnInit() {
  }

}
