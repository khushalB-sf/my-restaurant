import React from 'react'
import { Table, TableProps } from 'antd'

function TableAtom<T extends object>(props: Readonly<TableProps<T>>) {
  return <Table {...props} />
}

export default TableAtom
