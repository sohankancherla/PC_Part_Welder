import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { GlobalConstants } from './globalConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SpringBootAngularUI';
  user = "";
  
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
      this.primengConfig.ripple = true;
      this.user = GlobalConstants.user.username;
  }
}
