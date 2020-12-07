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
import HouseIcon from './icon'; // <-- this line, can be any svg icon from Streamline
// Or you can import icon from a Streamline icon package like 
// import { Home } from "@streamlinehq/streamline-light/lib/interface-essential"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'example-angular-app';
  public icon = HouseIcon; // <-- this line, variable can have any name
}
```

3. Render the icon in your template, eg in `app.component.html`
```
<streamline-icon [icon]="icon"></streamline-icon>
```

Note that you can import the Icon type from the package as well. 
