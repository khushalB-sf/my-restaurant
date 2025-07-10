import React from 'react'
import { TableProps, TableColumnsType } from 'antd'
import { CheckOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons'

import ButtonAtom from '@/components/atoms/button'
import TableAtom from '@/components/atoms/table'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'

export type FormData = {
  id: string
  name: string
  email: string
  phone?: string
}

export type FormDataTableProps = {
  dataSource: FormData[]
  handleDelete: (id: string) => void
}

function FormDataTable(props: Readonly<FormDataTableProps>) {
  const { dataSource, handleDelete } = props
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const columns: TableColumnsType<FormData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => (a.id && b.id ? a.id.localeCompare(b.id) : 0),
        multiple: 1
      },
      render: (text: string) => (
        <div>
          <span>{text}</span>
          <ButtonAtom
            type="link"
            size="small"
            icon={text === isCopied ? <CheckOutlined /> : <CopyOutlined />}
            onClick={() => copyToClipboard(text)}
          />
        </div>
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: {
        compare: (a, b) => (a.name && b.name ? a.name.localeCompare(b.name) : 0),
        multiple: 1
      }
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (text: string) => (
        <div>
          <span>{text}</span>
          <ButtonAtom
            type="link"
            size="small"
            icon={text === isCopied ? <CheckOutlined /> : <CopyOutlined />}
            onClick={() => copyToClipboard(text)}
          />
        </div>
      )
    },
    {
      title: 'Phone',
      dataIndex: 'phone'
    },
    {
      title: 'Action',
      render: (_text: unknown, record: FormData) => (
        <span>
          <ButtonAtom
            type="link"
            size="small"
            onClick={() => record?.id && handleDelete(record.id)}
            icon={<DeleteOutlined />}
          />
        </span>
      )
    }
  ]

  const onChange: TableProps<FormData>['onChange'] = () => {
    // console.log('params', pagination, filters, sorter, extra)
  }

  return (
    <div>
      <TableAtom columns={columns} dataSource={dataSource} onChange={onChange} />
    </div>
  )
}

export default FormDataTable
