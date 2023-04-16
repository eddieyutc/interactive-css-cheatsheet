import React from 'react'

interface ConfigurationProps {
  children: React.ReactElement
}

export function Configuration({ children }: ConfigurationProps) {
  return <aside style={styles}>{children}</aside>
}

const styles: React.CSSProperties = {
  minWidth: '200px',
  flexGrow: 1,
}
