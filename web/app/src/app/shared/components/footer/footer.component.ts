import { Component, OnInit } from '@angular/core';
import { ConfService } from 'src/services/conf.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public _conf: ConfService
  ) { }

  ngOnInit(): void {
  }

}
