import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import localStorageService from '../../services/localStorageService'
import { MenuItem } from '../../interface/types'

export interface DashboardState {
  items: MenuItem[]
  categories: string[]
}

const initialState: DashboardState = {
  items: localStorageService.getMenuItems(),
  categories: localStorageService.getCategories()
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addMenuItem(state, action: PayloadAction<MenuItem>) {
      state.items.push(action.payload)
      localStorageService.saveMenuItems(state.items)
    },
    updateMenuItem(state, action: PayloadAction<MenuItem>) {
      const idx = state.items.findIndex((i) => i.id === action.payload.id)
      if (idx !== -1) {
        state.items[idx] = action.payload
        localStorageService.saveMenuItems(state.items)
      }
    },
    deleteMenuItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
      localStorageService.saveMenuItems(state.items)
    },
    // (Optional) if you ever need to update categories:
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload
      localStorageService.saveCategories(state.categories)
    }
  }
})

export const { addMenuItem, updateMenuItem, deleteMenuItem, setCategories } = dashboardSlice.actions

export default dashboardSlice.reducer
