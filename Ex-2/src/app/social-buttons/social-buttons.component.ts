import { Component, OnInit } from '@angular/core';
import { SocialMenuItem } from '../../assets/Models';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})
export class SocialButtonsComponent implements OnInit {
  SocialItems: SocialMenuItem[];

  constructor() {
    // tslint:disable-next-line:max-line-length
    this.SocialItems = [new SocialMenuItem('https://www.google.co.il/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', 'https://www.facebook.com'),
    new SocialMenuItem('https://www.google.co.il/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', 'https://www.google.com'),
    new SocialMenuItem('https://www.google.co.il/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', 'https://www.linkedin.com')];
  }

  ngOnInit() {
  }

}
