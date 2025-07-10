// Input.tsx
import React from 'react'
import { Input } from 'antd'
import { InputProps } from 'antd/es/input'
import '../../styles/form.css'

interface FormInputProps extends InputProps {
  label?: string
  prefix?: React.ReactNode
  theme?: 'light' | 'dark'
}

function InputAtom(props: Readonly<FormInputProps>) {
  const { prefix, theme = 'light', ...rest } = props

  return <Input {...rest} prefix={prefix} className={`input-${theme}`} />
}

export default InputAtom
