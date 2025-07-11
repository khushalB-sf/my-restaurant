import React from 'react'
import { Card, Skeleton } from 'antd'

export default function RecipeDetailCardSkeleton() {
  return (
    <Card
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #f0f0f0',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        margin: '0.5rem auto'
      }}
      cover={
        <div
          style={{
            height: 180,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            overflow: 'hidden'
          }}
        >
          <Skeleton.Image active style={{ width: '100%', height: '100%', margin: '3rem auto' }} />
        </div>
      }
    >
      <Skeleton active paragraph={{ rows: 2 }} title={{ width: '60%' }} />
    </Card>
  )
}
