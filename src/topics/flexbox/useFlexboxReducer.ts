import {
  ContainerProps,
  defaultContainerProps,
} from '@src/topics/flexbox/components/FlexContainer'
import { ItemProp } from '@src/topics/flexbox/components/FlexItem'
import { useImmerReducer } from 'use-immer'

export interface FlexboxState {
  containerProps: ContainerProps
  itemProps: ItemProp[]
}

export const defaultFlexboxState: FlexboxState = {
  containerProps: defaultContainerProps,
  itemProps: [] as ItemProp[],
}

export const FlexboxActionType = {
  add: 'addstr',
} as const

interface AddFlexItem {
  type: (typeof FlexboxActionType)[keyof typeof FlexboxActionType]
  payload: {
    itemProp: ItemProp
  }
}

export type FlexboxAction = AddFlexItem

function flexboxReducer(state: FlexboxState, action: FlexboxAction) {
  switch (action.type) {
    case FlexboxActionType.add:
      state.itemProps.push(action.payload.itemProp)
      break

    default:
      break
  }
}

export function useFlexboxReducer() {
  const [flexState, dispatch] = useImmerReducer(
    flexboxReducer,
    defaultFlexboxState
  )
  return [flexState, dispatch] as const
}
