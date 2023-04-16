import { Configuration } from '@src/components/configuration'
import { Navbar } from '@src/components/navbar'
import { Preview } from '@src/components/preview'
import React from 'react'

interface LayoutProps {
  children: [React.ReactElement, React.ReactElement]
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main style={styles}>
        <Preview>{children[0]}</Preview>
        <Configuration>{children[1]}</Configuration>
      </main>
    </>
  )
}

const styles: React.CSSProperties = {
  display: 'flex',
  flexGrow: 1,
}
