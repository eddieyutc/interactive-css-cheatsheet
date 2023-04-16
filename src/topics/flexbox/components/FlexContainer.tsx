import React from 'react'

export interface ContainerProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

export const defaultContainerProps: ContainerProps = {
  flexDirection: 'row',
}

export function FlexContainer(props = defaultContainerProps) {
  return <></>
}
