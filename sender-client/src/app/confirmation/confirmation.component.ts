import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadComponent } from '../upload/upload.component';
import { ImageshareService } from '../imageshare.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

images:string;

  @Input()
  public data: string;
  constructor( private route: ActivatedRoute, private _Imageshareservice: ImageshareService
    ) { }

  ngOnInit() {
    
    this.images = this._Imageshareservice.getImage();
    
    
    this.route.paramMap.subscribe(params => {
      this.data = UploadComponent[+params.get('image')];

    }
    

    );
  }

}
