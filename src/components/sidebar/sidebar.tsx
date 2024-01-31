'use client'

import { useState } from 'react'
import { Sidebar } from '.'

export function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <Sidebar.Root data-testid="sidebar">
      <Sidebar.Header handleSidebarVisibility={setIsOpen} />
      <Sidebar.MainNavigation />
      <Sidebar.Footer />
    </Sidebar.Root>
  )
}
