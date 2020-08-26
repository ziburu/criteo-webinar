import { Component } from '@angular/core';
import * as data from './../../data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Front Development talks';

  talks = (data as any).default;

  openLink(link: any) {
    window.open(link, '_blank');
  }
}
