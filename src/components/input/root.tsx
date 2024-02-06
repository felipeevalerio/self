import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return <div {...props} />
}
