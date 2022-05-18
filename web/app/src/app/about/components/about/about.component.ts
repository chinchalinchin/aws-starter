import { Component, OnInit } from '@angular/core';
import { ConfService } from 'src/services/conf.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    public _conf: ConfService
  ) { }

  ngOnInit(): void {
  }

}
