import Seo from '@/components/atoms/seo.server'
import Dashboard from '@/features/dashboard/components/DashboardLayout'

export default function DashboardPage() {
  return (
    <>
      <Seo
        title="Dashboard - My Restaurant"
        description="Track your progress and manage your profile in one place."
        keywords="dashboard, app, analytics"
        image="/meta-image.png"
        url="http://http://localhost:5173//dashboard"
      />
      <Dashboard />
    </>
  )
}
