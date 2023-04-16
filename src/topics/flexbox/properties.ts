export interface ContainerProperties {
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

export interface ItemProperties {
  height: string
  width: string
  backgroundColor: string
  flexGrow: number
}

export const defaultContainerProps: ContainerProperties = {
  flexDirection: 'row',
}
