import { ComponentProps } from 'react'

type ShortcutProps = ComponentProps<'button'>

export function Shortcut(props: ShortcutProps) {
  return <button type="button" {...props} />
}
