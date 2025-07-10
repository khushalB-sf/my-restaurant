import { Image, ImageProps } from 'antd'
import React from 'react'

function ImageAtom(props: Readonly<ImageProps>) {
  return <Image {...props} />
}

export default ImageAtom
