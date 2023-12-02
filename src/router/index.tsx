
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'
import Home from '@/page/Home'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <Home/>,
			},
		],
	},
])

export default router
