
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'
import HelloWrold from '../page/HelloWrold'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <HelloWrold/>,
			},
		],
	},
])

export default router
