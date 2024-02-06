import { Bell, Moon, Plus } from 'lucide-react'
import { SearchBar } from './search-bar'
import { ProfilePicture } from './profile-picture'
import { Shortcut } from './shortcut'

export function Header() {
  return (
    <header className="flex items-center justify-end">
      <SearchBar />
      <div className="flex items-center gap-4 ml-6">
        <Shortcut>
          <Plus />
        </Shortcut>
        <Shortcut>
          <Bell />
        </Shortcut>
        <Shortcut>
          <Moon />
        </Shortcut>
        <Shortcut>
          <ProfilePicture />
        </Shortcut>
      </div>
    </header>
  )
}
