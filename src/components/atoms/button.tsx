import React from 'react'
import { ButtonProps, Button } from 'antd'

function ButtonAtom(props: Readonly<ButtonProps>) {
  return <Button {...props} />
}
export default ButtonAtom
