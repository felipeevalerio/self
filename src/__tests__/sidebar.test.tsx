import { describe, expect, it, vitest } from 'vitest'
import { SidebarComponent } from '../components/sidebar/sidebar'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

vitest.mock('next/navigation', () => ({
  usePathname: vitest.fn(() => '/finance'),
}))

describe('Sidebar', () => {
  it('should color the sidebar action when the current pathname is the href', () => {
    const { getByTestId, unmount } = render(<SidebarComponent />)
    const activeLink = getByTestId('/finance')

    expect(activeLink.className).contains('bg-yellow')
    unmount()
  })

  it('should stay in the same color the sidebar action when the current pathname is the href', () => {
    const { getByTestId, unmount } = render(<SidebarComponent />)
    const inactiveLink = getByTestId('/water-intake')
    expect(inactiveLink.className).contains('bg-gray-500')
    unmount()
  })

  it('should hide the sidebar', async () => {
    const { getByTestId, queryByTestId, unmount } = render(<SidebarComponent />)
    const user = userEvent.setup()

    await user.click(getByTestId('hide-sidebar'))
    expect(queryByTestId('sidebar')).toBeNull()
    unmount()
  })
})
