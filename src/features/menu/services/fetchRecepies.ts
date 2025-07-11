import { RecipeListResponse } from '../types'

export async function fetchRecipes(): Promise<RecipeListResponse> {
  const res = await fetch('https://dummyjson.com/recipes', {
    cache: 'no-store' // optional: ensures fresh data
  })
  if (!res.ok) throw new Error('Failed to fetch recipes')
  const data = await res.json()
  return data as RecipeListResponse
}
