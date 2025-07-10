import React from 'react'
import Seo from '@/components/atoms/seo.server'

function MenuItemPage() {
  return (
    <>
      <Seo
        title="Menu list - My Restaurant"
        description="Track your progress and manage your profile in one place."
        keywords="dashboard, app, analytics"
        image="/meta-image.png"
        url="http://http://localhost:5173//dashboard"
      />
      <body>
        <div>
          <h1 className="text-xl font-bold mb-4">Menu item pages</h1>
        </div>
      </body>
    </>
  )
}

export default MenuItemPage
