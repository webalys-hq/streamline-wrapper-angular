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
type Icon = [
  iconSlug,
  iconWidth,
  iconHeight,
  iconOptions[],
  iconRepresentation[],
];
const HouseIcon: Icon = [ 'house', 24, 24, [ { fill: 'none', stroke: '#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5' } ], [ 'M22.272,23.247a.981.981,0,0,0,.978-.978V9.747a1.181,1.181,0,0,0-.377-.8L12,.747,1.127,8.947a1.181,1.181,0,0,0-.377.8V22.269a.981.981,0,0,0,.978.978Z' ] ];

export default HouseIcon;
