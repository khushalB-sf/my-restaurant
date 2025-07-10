import React from 'react'
import '../../styles/navbar.css'
import { Layout, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import ImageAtom from '../atoms/image'
import SwitchAtom from '../atoms/switch'
import { useTheme } from '../../context/themeContext'
import logo from '../../assets/simform.svg'

const { Header } = Layout

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const items = [
    {
      key: '1',
      label: 'Dashboard',
      link: '/',
      onClick: () => navigate('/')
    },
    {
      key: '2',
      label: 'Menu',
      link: '/menu',
      onClick: () => navigate('/menu')
    }
  ]

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="logoContainer">
        <ImageAtom src={logo} alt="Logo" preview={false} />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[items.find((item) => item.link === pathname)?.key ?? '1']}
        mode="horizontal"
        items={items}
        style={{ flex: 1, minWidth: 0, marginLeft: '20px' }}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <SwitchAtom
          className="toggleThemeSwitch"
          onChange={handleToggle}
          checkedChildren="Light"
          unCheckedChildren="Dark"
          defaultChecked={theme === 'light'}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              key: '3',
              label: 'Logout',
              onClick: () => {
                localStorage.removeItem('token')
                navigate('/login')
              }
            }
          ]}
          style={{ flex: 1, minWidth: 0, marginLeft: '20px' }}
        />
      </div>
    </Header>
  )
}

export default Navbar
