import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'

type InputIconProps = ComponentProps<'div'>

const inputIconStyle = 'absolute top-1/2 left-2 -translate-y-1/2'

export function InputIcon({ className, ...props }: InputIconProps) {
  return <div className={twJoin(inputIconStyle, className)} {...props} />
}
