import { Component } from '@angular/core';
import HouseIcon from './icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'example-angular-app';
  public icon = HouseIcon
}
