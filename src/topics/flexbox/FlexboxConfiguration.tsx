import { defaultItemProps } from '@src/topics/flexbox/components/FlexItem'
import { useFlexbox } from '@src/topics/flexbox/useFlexbox'
import { FlexboxActionType } from '@src/topics/flexbox/useFlexboxReducer'
import React from 'react'

export function FlexboxConfiguration() {
  const [_, dispatch] = useFlexbox()

  function addItem() {
    const props = defaultItemProps
    const action = {
      type: FlexboxActionType.add,
      payload: { itemProp: props },
    }
    dispatch(action)
  }

  return (
    <>
      <button onClick={addItem}>Add Item</button>
    </>
  )
}
