import { configureStore } from '@reduxjs/toolkit'
// import users from './features/users'
// import products from './features/products'
import weather from './features/weather'

export const store = configureStore({
  reducer: {
    weather
  },
})