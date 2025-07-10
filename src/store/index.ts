// create a store with a menu slice and a counter slice
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import menuSlice from '../features/menu/menuSlice'
import counterSlice from '../features/counter/counterSlice'
import authSlice from '../features/auth/authSlice'
import { userApi } from './api/userApi'

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    counter: counterSlice,
    auth: authSlice,
    [userApi.reducerPath]: userApi.reducer // Add the userApi reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware) // Add the userApi middleware
})
// Setup listeners for the userApi
setupListeners(store.dispatch)
// Export the types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// Export the store
export default store
