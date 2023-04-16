import { ItemProperties } from '@src/topics/flexbox/properties'
import React from 'react'

const defaultProps: ItemProperties = {
  height: '100px',
  width: '100px',
  backgroundColor: 'blue',
  flexGrow: 1,
}

export function FlexItem(props = defaultProps) {
  return <div style={props}></div>
}
