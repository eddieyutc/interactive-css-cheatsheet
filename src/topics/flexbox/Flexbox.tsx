import { Layout } from '@src/components/layout'
import { FlexboxConfiguration } from '@src/topics/flexbox/FlexboxConfiguration'
import { FlexboxPreview } from '@src/topics/flexbox/FlexboxPreview'
import { FlexboxProvider } from '@src/topics/flexbox/useFlexbox'
import React from 'react'

export function Flexbox() {
  return (
    <FlexboxProvider>
      <Layout>
        <FlexboxPreview />
        <FlexboxConfiguration />
      </Layout>
    </FlexboxProvider>
  )
}
