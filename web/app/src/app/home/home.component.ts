import { Component, OnInit } from '@angular/core';
import { ConfService } from 'src/services/conf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public _conf: ConfService
  ) { }

  ngOnInit(): void {
  }

}
