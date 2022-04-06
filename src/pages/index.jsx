import Increment from '../component/increment'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function IndexPage() {
	const store = useSelector((store) => store)

	useEffect(() => {
		console.log({ store })
	}, [store])

	return (
		<>
			<Increment />
		</>
	)
}
