import React from 'react'

export interface ItemProp {
  height?: string
  width?: string
  backgroundColor?: string
  flexGrow?: number
}

export const defaultItemProps: ItemProp = {
  height: '100px',
  width: '100px',
  backgroundColor: 'blue',
  flexGrow: 1,
}

export function FlexItem(props = defaultItemProps) {
  return <div style={props}></div>
}
