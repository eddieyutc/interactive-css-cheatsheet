import React from 'react'

export function FlexboxConfiguration() {
  function addItem() {
    console.log('add item!')
  }

  return (
    <>
      <button onClick={addItem}>Add Item</button>
    </>
  )
}
