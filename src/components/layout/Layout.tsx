import { Configuration } from '@src/components/configuration'
import { Navbar } from '@src/components/navbar'
import { Preview } from '@src/components/preview'
import React from 'react'

export function Layout() {
  return (
    <>
      <Navbar />
      <main style={styles}>
        <Preview />
        <Configuration />
      </main>
    </>
  )
}

const styles: React.CSSProperties = {
  display: 'flex',
  flexGrow: 1,
}
