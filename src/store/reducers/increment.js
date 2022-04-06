import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0,
}

export const slice = createSlice({
	name: 'increment',
	initialState,
	reducers: {
		reset: (state) => {
			state.value = initialState.value
		},
		increase: (state) => {
			state.value += 1
		},
		decrease: (state) => {
			state.value -= 1
		},
	},
})

export const { increase, decrease, reset: resetIncrement } = slice.actions

export default slice.reducer
