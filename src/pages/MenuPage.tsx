// src/pages/MenuPage.tsx
import React from 'react'
import Seo from '@/components/atoms/seo.server'

function MenuPage() {
  return (
    <>
      <Seo
        title="Menu list - My Restaurant"
        description="Track your progress and manage your profile in one place."
        keywords="dashboard, app, analytics"
        image="/meta-image.png"
        url="http://localhost:5173/dashboard"
      />
      <div>
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      </div>
    </>
  )
}

export default MenuPage
