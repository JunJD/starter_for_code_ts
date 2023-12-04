
import { Outlet, useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'



const Setting = () => {

	const albums = useLoaderData()
	useEffect(()=>{
		console.log(albums)
	},[albums])
	return (
		<>
			<Outlet />
		</>
	)
}

export default Setting