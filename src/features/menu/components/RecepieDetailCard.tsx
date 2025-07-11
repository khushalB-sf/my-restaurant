import React from 'react'
import { Card, Tag, Rate } from 'antd'
import { Link } from 'react-router-dom'
import type { Recipe } from '../types'

type Props = {
  recipe: Recipe
  showDetails: boolean
}

export default function RecipeCard({ recipe }: Readonly<Props>) {
  return (
    <Link to={`/menu/${recipe.id}`}>
      <Card
        hoverable
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #f0f0f0',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          transition: 'box-shadow 0.3s',
          margin: '0.5rem auto'
        }}
        cover={
          <img
            alt={recipe.name}
            src={recipe.image}
            style={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              height: 180,
              objectFit: 'cover'
            }}
          />
        }
      >
        <h3 style={{ color: '#1f1f1f', marginBottom: 8 }}>{recipe.name}</h3>
        <p style={{ color: '#595959', fontSize: 13 }}>
          {recipe.cuisine} • {recipe.difficulty} • {recipe.mealType.join(', ')}
        </p>

        <div style={{ marginTop: 12 }}>
          <Tag color="volcano">{recipe.caloriesPerServing} cal</Tag>
          <Tag color="cyan">{recipe.servings} servings</Tag>
          <Rate allowHalf disabled defaultValue={recipe.rating} style={{ fontSize: 14 }} />
        </div>
      </Card>
    </Link>
  )
}
