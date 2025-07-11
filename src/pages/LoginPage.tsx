'use server'

import React from 'react'
import Seo from '@/components/atoms/seo.server' // Make sure this path is correct

function LoginPage() {
  return (
    <>
      <Seo
        title="Login - MyApp"
        description="Login to access your dashboard and manage your account."
        keywords="login, authentication, access"
        image="/meta-image.png"
        url="http://localhost:5173/login" // Change to your actual domain in production
      />
      <div>LoginPage</div>
    </>
  )
}

export default LoginPage
