import {
  FlexboxAction,
  FlexboxState,
  defaultFlexboxState,
  useFlexboxReducer,
} from '@src/topics/flexbox/useFlexboxReducer'
import React, { createContext, useContext } from 'react'

type FlexboxContextType = [
  flexboxState: FlexboxState,
  flexboxDispatch: React.Dispatch<FlexboxAction>
]

export const FlexboxContext = createContext<FlexboxContextType>([
  defaultFlexboxState,
  () => console.log('Flexbox reducer not initialized yet'),
])

export interface FlexboxProviderProps {
  children: React.ReactNode
}

export function FlexboxProvider({ children }: FlexboxProviderProps) {
  const [flexboxState, flexboxDispatch] = useFlexboxReducer()

  return (
    <FlexboxContext.Provider value={[flexboxState, flexboxDispatch]}>
      {children}
    </FlexboxContext.Provider>
  )
}

export function useFlexbox() {
  const flexboxContext = useContext(FlexboxContext)
  return flexboxContext
}
