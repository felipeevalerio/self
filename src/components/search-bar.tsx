import { Search } from 'lucide-react'
import { Input } from './input'

export function SearchBar() {
  return (
    <Input.Root className="focus:opacity-100 opacity-60 relative w-80">
      <Input.Icon>
        <Search size={10} />
      </Input.Icon>
      <Input.Field
        name="search-bar"
        placeholder="search anything..."
        className="pr-2 pl-10 peer"
      />
      <Input.Hotkey
        letter="P"
        className="peer-focus:opacity-0 transition-opacity ease"
      />
    </Input.Root>
  )
}
