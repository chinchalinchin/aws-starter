import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/models';
import { ImgConfig } from 'src/properties';
import { ConfService } from 'src/services/conf.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public logoConf: ImgConfig | undefined;
  public navConf: Nav[];

  constructor(
    public _conf: ConfService
  ) {
    this.logoConf = this._conf.getImgConfig('logo-img');
    this.navConf = this._conf.getMenuNavs();
  }

  ngOnInit(): void {
  }

}
