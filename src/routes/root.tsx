'use server'

import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'
import Navbar from '@/components/molecules/navbar'

const { Content } = Layout

function RootLayout() {
  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            minHeight: 280,
            padding: 24
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  )
}

export default RootLayout
