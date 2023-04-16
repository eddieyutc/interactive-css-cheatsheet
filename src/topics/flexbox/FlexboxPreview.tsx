import { ItemProp } from '@src/topics/flexbox/components/FlexItem'
import { FlexItem } from '@src/topics/flexbox/components/FlexItem'
import { useFlexbox } from '@src/topics/flexbox/useFlexbox'
import React from 'react'

export function FlexboxPreview() {
  const [flexboxState, _] = useFlexbox()

  return (
    <>
      {flexboxState.itemProps.map((props: ItemProp, index) => (
        <FlexItem key={index} {...props} />
      ))}
    </>
  )
}
