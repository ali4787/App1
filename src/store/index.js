import { configureStore } from '@reduxjs/toolkit'
import increment from './reducers/increment'

export const store = configureStore({
	reducer: {
		increment,
	},
})
