import { Component, OnInit } from '@angular/core';
import { ConfService } from 'src/services/conf.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(
    public _conf: ConfService
  ) { }

  ngOnInit(): void {
  }

}
