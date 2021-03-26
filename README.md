# Deprecated
Warning, this package is deprecated and will be removed on June 1st 2021. Please use our new package [streamlinehq](https://github.com/webalys-hq/streamlinehq-npm) instead, it provides a much better user experience.

# Angular wrapper for Streamline icons and illustrations
This is a small Angular library which allows you to render Streamline SVG icons and illustrations.

## How to install
`yarn add @streamlinehq/streamline-wrapper-angular`

## How to use
Check docs/example-angular-app project to see it in use.

1. Import the module
```
// in your module, eg app.module.ts

import {StreamlineIconModule} from '@streamlinehq/streamline-wrapper-angular';

// Then add it to imports array:

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StreamlineIconModule, // <-- this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Define the icon
```
// in your component, eg app.component.ts

import { Component } from '@angular/core';
// To use a Streamline icon first import a category you want from a family you have access to, eg:
import { Home } from "@streamlinehq/streamline-light/lib/interface-essential"
// And then take the icon of your choice from that category, eg with `Home.House`.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'example-angular-app';
  public icon = Home.House; // <-- this line
}
```

3. Render the icon in your template, eg in `app.component.html`
```
<streamline-icon [icon]="icon"></streamline-icon>
```
