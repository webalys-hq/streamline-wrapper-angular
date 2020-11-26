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
  selector: 'lib-streamline-icon',
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
  @Input() public infinite: boolean;
  @Input() public fast: boolean;
  @Input() public easeInOut: boolean;

  ngAfterViewInit(): void {
    this.pathEl.forEach((el, idx) => {
      const {
        fill, stroke, 'stroke-linecap': strokeLinecap, 'stroke-linejoin': strokeLinejoin, 'stroke-width': strokeWidth
      } = this.icon[3][idx];

      el.nativeElement.setAttribute('fill', this.fill || fill);
      el.nativeElement.setAttribute('stroke', this.stroke || stroke);
      el.nativeElement.setAttribute('stroke-linecap', strokeLinecap);
      el.nativeElement.setAttribute('stroke-linejoin', strokeLinejoin);
      el.nativeElement.setAttribute('stroke-width', strokeWidth);
    });
  }

  get classes(): object {
    return {
      'Streamline_Icon--spin': this.spin,
      'Streamline_Icon--infinite': this.infinite,
      'Streamline_Icon--fast': this.fast,
      'Streamline_Icon--ease_in_out': this.easeInOut,
      'Streamline_Icon--animated': this.spin,
    };
  }

  get sizeObject(): {width: number, height: number, shouldResize: boolean} {
    const sizeObject = {
      width: this.icon[1],
      height: this.icon[2],
      shouldResize: false,
    };
    if (this.size !== 24) {
      sizeObject.shouldResize = this.size !== sizeObject.width;
      sizeObject.height = this.size;
      sizeObject.width = this.size;
    } else {
      if (this.height !== sizeObject.height) {
        sizeObject.height = this.height;
        sizeObject.shouldResize = true;
      }

      if (this.width !== sizeObject.width) {
        sizeObject.width = this.width;
        sizeObject.shouldResize = true;
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
