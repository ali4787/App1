import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, resetIncrement, decrease } from '../store/reducers/increment'


export default function Increment() {
	const { increment } = useSelector((store) => store)
	const dispatch = useDispatch()

	return (
		<div>
			<h2>
				 Value: <b>{increment.value}</b>
			</h2>
			<button onClick={() => dispatch(increase())}>( + ) Increase</button>
			<button onClick={() => dispatch(resetIncrement())}>Reset</button>
			<button onClick={() => dispatch(decrease())}>( - ) Decrease</button>
		</div>
	)
}
