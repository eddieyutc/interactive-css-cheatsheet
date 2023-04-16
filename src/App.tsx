import React, { useState } from 'react'
import './App.css'
import { Layout } from '@src/components/layout'
import { FlexboxConfiguration, FlexboxPreview } from '@src/topics/flexbox'

function App() {
  return (
    <React.StrictMode>
      <Layout>
        <FlexboxPreview />
        <FlexboxConfiguration />
      </Layout>
    </React.StrictMode>
  )
}

export default App
