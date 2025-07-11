import React from 'react'
import { Col, Row } from 'antd'
import { useQuery } from '@tanstack/react-query'
import RecipeDetailCard from './components/RecepieDetailCard'
import { fetchRecipes } from './services/fetchRecepies'
import RecipeDetailCardSkeleton from './components/RecepieDetailCardSkeleton'

const skeletonKeys = ['sk-1', 'sk-2', 'sk-3', 'sk-4', 'sk-5', 'sk-6']

function Menu() {
  const { data: recipes = { recipes: [] }, isLoading } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes
  })
  return (
    <div style={{ background: '#f5f5f5' }}>
      <Row gutter={20}>
        {isLoading
          ? skeletonKeys.map((key) => (
              <Col key={key} sm={24} md={12} lg={8}>
                <RecipeDetailCardSkeleton />
              </Col>
            ))
          : recipes.recipes.map((recepie) => (
              <Col key={recepie.id} sm={24} md={12} lg={8}>
                <RecipeDetailCard recipe={recepie} showDetails={false} />
              </Col>
            ))}
      </Row>
    </div>
  )
}

export default Menu
