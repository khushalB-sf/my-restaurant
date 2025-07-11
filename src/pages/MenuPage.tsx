import { Suspense } from 'react'
import Seo from '@/components/atoms/seo.server'
import Menu from '@/features/menu/Menu'
import RecipeDetailCardSkeleton from '@/features/menu/components/RecepieDetailCardSkeleton'

export default function MenuPage() {
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
        <Suspense fallback={<RecipeDetailCardSkeleton />}>
          <Menu />
        </Suspense>
      </div>
    </>
  )
}
