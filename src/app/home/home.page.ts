import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';
import { StatusBar, Style } from '@capacitor/status-bar';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
    StatusBar.setStyle({style: Style.Light});
    // keyboard will resize webview when the following line is commented
    StatusBar.setOverlaysWebView({overlay: true});
  }
}
