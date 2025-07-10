import React, { Suspense, LazyExoticComponent } from 'react'

type LazyWrapperProps<T extends Record<string, unknown> = Record<string, never>> = Readonly<{
  component: LazyExoticComponent<React.ComponentType<T>>
  props?: Readonly<T>
}>

function LazyWrapper<T extends Record<string, unknown>>({
  component: Component,
  props
}: LazyWrapperProps<T>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...(props as T)} />
    </Suspense>
  )
}

export default LazyWrapper
