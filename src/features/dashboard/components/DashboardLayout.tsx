import React from 'react'
import { Card, Tag, Rate, Typography, Divider, Carousel, Button, Row, Col, Statistic } from 'antd'

import { dummyMenuList } from '@/features/menu/dummyData' // adjust the path
import Seo from '@/components/atoms/seo.server'

const { Title, Paragraph } = Typography

function Dashboard() {
  const { recipes, total } = dummyMenuList

  const avgRating = recipes.reduce((sum, r) => sum + r.rating, 0) / recipes.length

  const cuisineCount = recipes.reduce(
    (acc, recipe) => {
      acc[recipe.cuisine] = (acc[recipe.cuisine] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )

  const topCuisine = Object.entries(cuisineCount).sort((a, b) => b[1] - a[1])[0]?.[0]

  const topMealType = recipes[0]?.mealType[0]
  const latestRecipe = recipes[0]

  return (
    <>
      <Seo
        title="Dashboard - My Restaurant"
        description="Your recipe insights"
        keywords="dashboard, recipes"
        url="http://localhost:5173/dashboard"
        image={latestRecipe.image}
      />

      <div style={{ padding: '24px', background: '#f0f2f5', minHeight: '100vh' }}>
        <Title level={2}>Welcome to My-Restaurant</Title>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic title="Total Recipes" value={total} suffix="items" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic title="Top Cuisine" value={topCuisine} />
              <Tag color="green">{topMealType}</Tag>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic title="Average Rating" value={avgRating} precision={1} />
              <Rate disabled allowHalf defaultValue={avgRating} />
            </Card>
          </Col>
        </Row>

        <Divider orientation="left">Latest Recipe</Divider>
        <Card
          style={{ maxWidth: 900, margin: '0 auto', background: '#ffffff' }}
          cover={
            <img
              src={latestRecipe.image}
              alt={latestRecipe.name}
              style={{ height: 300, objectFit: 'cover' }}
            />
          }
        >
          <Title level={3}>{latestRecipe.name}</Title>
          <Paragraph>
            <Tag>{latestRecipe.cuisine}</Tag>
            <Tag>{latestRecipe.difficulty}</Tag>
            <Tag color="orange">{latestRecipe.mealType.join(', ')}</Tag>
          </Paragraph>
          <Paragraph>
            <strong>Prep Time:</strong> {latestRecipe.prepTimeMinutes} min{' '}
            <strong>• Cook Time:</strong> {latestRecipe.cookTimeMinutes} min
          </Paragraph>
          <Paragraph>
            <strong>Calories:</strong>{' '}
            <Tag color="volcano">{latestRecipe.caloriesPerServing} cal</Tag>
          </Paragraph>
          <Button type="primary" href={`/menu/${latestRecipe.id}`}>
            View Full Recipe
          </Button>
        </Card>

        <Divider orientation="left">Popular Recipes</Divider>
        <Carousel dots={false} arrows autoplay dotPosition="bottom">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <Card
                hoverable
                style={{
                  width: '90%',
                  maxWidth: 500,
                  margin: '0 auto',
                  borderRadius: 12,
                  overflow: 'hidden'
                }}
                cover={
                  <img
                    alt={recipe.name}
                    src={recipe.image}
                    style={{ height: 200, objectFit: 'cover' }}
                  />
                }
              >
                <Title level={4}>{recipe.name}</Title>
                <p>
                  <Tag>{recipe.difficulty}</Tag>
                  <Tag>{recipe.mealType.join(', ')}</Tag>
                  <Tag>{recipe.cuisine}</Tag>
                </p>
                <Rate allowHalf disabled defaultValue={recipe.rating} />
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default Dashboard
