import React, { FunctionComponent } from 'react'

import './StreamlineIcon.css'

type iconSlug = string
type iconWidth = number
type iconHeight = number
type iconOptions = {
  fill: string
  stroke: string
  'stroke-linecap': 'butt' | 'round' | 'square' | 'inherit'
  'stroke-linejoin': 'miter' | 'round' | 'bevel' | 'inherit'
  'stroke-width': number | string
}
type iconRepresentation = string
export type Icon = [
  iconSlug,
  iconWidth,
  iconHeight,
  iconOptions[],
  iconRepresentation[],
]

const StreamlineIcon: FunctionComponent<{
  icon: Icon
  spin?: boolean
  infinite?: boolean
  easeInOut?: boolean
  fast?: boolean
  size?: number
  fill?: string
  stroke?: string
  width?: number
  height?: number
  customClassName?: string
}> = ({
  icon,
  fill,
  stroke,
  width,
  height,
  customClassName,
  size,
  spin = false,
  infinite = false,
  fast = false,
  easeInOut = false,
}) => {
  const getClassName = () => {
    const className = ['Streamline_Icon']
    if (spin)
      className.push('Streamline_Icon--spin', 'Streamline_Icon--animated')
    if (infinite) className.push('Streamline_Icon--infinite')
    if (fast) className.push('Streamline_Animation--fast')
    if (easeInOut) className.push('Streamline_Animation--ease_in_out')
    if (customClassName) className.push(customClassName)

    return className.join(' ')
  }

  let shouldResize = true
  let finalWidth = icon[1]
  let finalHeight = icon[2]

  if (size) {
    shouldResize = size !== finalWidth
    finalWidth = size
    finalHeight = size
  } else {
    if (height && height !== finalHeight) {
      finalHeight = height
      shouldResize = true
    }

    if (width && width !== finalWidth) {
      finalWidth = width
      shouldResize = true
    }
  }

  const renderPaths = () =>
    icon[4].map((path, index) => (
      <path
        fill={fill || icon[3][index]['fill']}
        stroke={stroke || icon[3][index]['stroke']}
        strokeLinecap={icon[3][index]['stroke-linecap']}
        strokeLinejoin={icon[3][index]['stroke-linejoin']}
        strokeWidth={icon[3][index]['stroke-width']}
        key={path}
        d={path}
      />
    ))

  return (
    <i className={getClassName()}>
      <svg
        viewBox={`0 0 ${finalWidth} ${finalHeight}`}
        style={{ width: finalWidth, height: finalHeight }}
        width={finalWidth}
        height={finalHeight}
      >
        {shouldResize ? (
          <g
            transform={`scale(${finalWidth / icon[1]},${
              finalHeight / icon[2]
            })`}
          >
            {renderPaths()}
          </g>
        ) : (
          renderPaths()
        )}
      </svg>
    </i>
  )
}

export default StreamlineIcon
