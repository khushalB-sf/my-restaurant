import { Switch, SwitchProps } from 'antd'

import React from 'react'

function SwitchAtom(props: Readonly<SwitchProps>) {
  const { checkedChildren, ...rest } = props

  return <Switch checkedChildren={checkedChildren} {...rest} />
}

export default SwitchAtom
