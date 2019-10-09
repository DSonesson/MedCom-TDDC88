import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  @Input()
  public data: string;
  constructor( private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.data = UploadComponent[+params.get('image')];
    });
  }

}
