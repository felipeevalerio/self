import { ChevronUpSquare } from 'lucide-react'
import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'

interface InputHotkeyProps extends ComponentProps<'div'> {
  letter: string
}

const inputHotkeyStyle =
  'absolute top-1/2 -translate-y-1/2 flex items-center gap-0.5 right-2'

export function InputHotkey({ letter, className, ...props }: InputHotkeyProps) {
  return (
    <div className={twJoin(inputHotkeyStyle, className)} {...props}>
      <ChevronUpSquare size={10} />
      <span>+</span>
      <span>{letter}</span>
    </div>
  )
}
