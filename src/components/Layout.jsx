import React from 'react'
import { Header } from './Header'

export function Layout({ children }) {
  return (
    <>
      <Header showSearch={true} />
      {children}
    </>
  )
}
