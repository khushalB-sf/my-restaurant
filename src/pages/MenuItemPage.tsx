import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Card, Tag, Rate, Typography, Divider, Skeleton } from 'antd'
import Seo from '@/components/atoms/seo.server'
import { fetchRecipes } from '@/features/menu/services/fetchRecepies'

const { Title, Paragraph } = Typography

function MenuItemPage() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes
  })

  const recipe = data?.recipes.find((r) => String(r.id) === id)

  if (!recipe) {
    return <Paragraph type="danger">Recipe not found</Paragraph>
  }

  const renderSkeleton = () => (
    <>
      <Title level={2}>
        <Skeleton.Input active style={{ width: 300 }} />
      </Title>
      <Card
        style={{ maxWidth: 800, background: '#fff' }}
        cover={<Skeleton.Image active style={{ width: '100%', height: 400 }} />}
      >
        <Skeleton paragraph={{ rows: 1 }} active />
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <Skeleton.Input active style={{ width: 100 }} />
          <Skeleton.Input active style={{ width: 100 }} />
          <Skeleton.Input active style={{ width: 100 }} />
        </div>
        <Divider />
        <Skeleton paragraph={{ rows: 3 }} active />
        <Divider />
        <Skeleton paragraph={{ rows: 4 }} active />
      </Card>
    </>
  )

  const renderRecipe = () => (
    <>
      <Title level={2}>{recipe?.name}</Title>
      <Card
        style={{ maxWidth: 800, background: '#fff', margin: 'auto' }}
        cover={
          <img
            src={recipe?.image}
            alt={recipe?.name}
            style={{ maxHeight: 400, objectFit: 'cover' }}
          />
        }
      >
        <Paragraph type="secondary">
          {recipe.cuisine} • {recipe.difficulty} • {recipe.mealType.join(', ')}
        </Paragraph>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <Tag color="gold">{recipe.caloriesPerServing} cal</Tag>
          <Tag color="blue">{recipe.servings} servings</Tag>
          <Rate allowHalf disabled defaultValue={recipe.rating} />
          <Tag>{recipe.reviewCount} Reviews</Tag>
        </div>

        <Divider orientation="left">Ingredients</Divider>
        <div>
          <ul style={{ textAlign: 'left' }}>
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <Divider orientation="left">Instructions</Divider>
        <div>
          <ol style={{ textAlign: 'left' }}>
            {recipe.instructions.map((step) => (
              <li key={step} style={{ marginBottom: 8 }}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </>
  )

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
        {isLoading && renderSkeleton()}
        {!isLoading && !recipe && <Paragraph>Recipe not found</Paragraph>}
        {!isLoading && recipe && renderRecipe()}
      </div>
    </>
  )
}

export default MenuItemPage
