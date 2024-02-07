import { ComponentProps } from 'react'
import { twJoin } from 'tailwind-merge'
import { useFormContext } from 'react-hook-form'

interface InputFieldProps extends ComponentProps<'input'> {
  name: string
}

const inputStyle =
  'text-white-500 border border-white-500 rounded-md py-2 w-full bg-gray-500 '

export function InputField({ name, className, ...props }: InputFieldProps) {
  // const { register } = useFormContext()

  return (
    <input
      className={twJoin(className, inputStyle)}
      id={name}
      // {...register(name)}
      {...props}
    />
  )
}
