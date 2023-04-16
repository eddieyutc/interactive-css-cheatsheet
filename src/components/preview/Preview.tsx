import React from 'react'

interface PreviewProps {
  children: React.ReactNode
}

export function Preview({ children }: PreviewProps) {
  return <section style={styles}>{children}</section>
}

const styles: React.CSSProperties = {
  flexBasis: '400px',
  flexGrow: 1,
}
