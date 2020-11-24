import { Component, Input, AfterViewInit, ViewChildren } from '@angular/core';

type iconSlug = string;
type iconWidth = number;
type iconHeight = number;
type iconOptions = {
  fill: string
  stroke: string
  'stroke-linecap': 'butt' | 'round' | 'square' | 'inherit'
  'stroke-linejoin': 'miter' | 'round' | 'bevel' | 'inherit'
  'stroke-width': number | string
};
type iconRepresentation = string;
export type Icon = [
  iconSlug,
  iconWidth,
  iconHeight,
  iconOptions[],
  iconRepresentation[],
];

@Component({
  selector: 'app-streamline-icon',
  templateUrl: './streamline-icon.component.html',
  styleUrls: ['./streamline-icon.component.css'],
})
export class StreamlineIconComponent implements AfterViewInit {
  @ViewChildren('pathElement') pathEl;

  constructor() {}

  @Input() public fill: string;
  @Input() public stroke: string;
  @Input() public size = 24;
  @Input() public width = 24;
  @Input() public height = 24;
  @Input() public icon: Icon;
  @Input() public spin: boolean;
  @Input() public pulse: boolean;
  @Input() public infinite: boolean;
  @Input() public fast: boolean;
  @Input() public easeInOut: boolean;

  ngAfterViewInit(): void {
    this.pathEl.forEach((el, idx) => {
      const tempIcon = this.icon[3];

      const tempOptions = {
        ...tempIcon[idx],
        stroke: this.stroke || tempIcon[idx].stroke,
        fill: this.fill || tempIcon[idx].fill,
      };

      for (const [key, value] of Object.entries(tempOptions)) {
        el.nativeElement.setAttribute(key, value);
      }
    });
  }

  get classes(): object {
    return {
      Streamline_Icon_Spin: this.spin,
      Streamline_Icon_Pulse: this.pulse,
      Streamline_Animation_Infinite: this.infinite,
      Streamline_Icon_Fast: this.fast,
      Streamline_Icon_EaseInOut: this.easeInOut,
      Streamline_Icon_Animated: this.spin || this.pulse,
    };
  }

  get sizeObject(): {width: number, height: number, isDefault: boolean} {
    const sizeObject = {
      width: this.icon[1],
      height: this.icon[2],
      isDefault: true,
    };
    if (this.size !== 24) {
      sizeObject.isDefault = this.size === sizeObject.width;
      sizeObject.height = this.size;
      sizeObject.width = this.size;
    } else {
      if (this.height !== sizeObject.height) {
        sizeObject.height = this.height;
        sizeObject.isDefault = false;
      }

      if (this.width !== sizeObject.width) {
        sizeObject.width = this.width;
        sizeObject.isDefault = false;
      }
    }
    return sizeObject;
  }

  get viewBox(): string {
    return `0 0 ${this.sizeObject.width} ${this.sizeObject.height}`;
  }

  get style(): string {
    return `width: ${this.sizeObject.width}; height: ${this.sizeObject.height}`;
  }

  get transform(): string {
    return `scale(${this.sizeObject.width / this.icon[1]},${
      this.sizeObject.height / this.icon[2]
    })`;
  }
}
