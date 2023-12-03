
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/layout'
import Files from '@/page/Files'
import Chats from '@/page/Chats'
import Setting from '@/page/Setting'
const muiRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/chats',
				element: <Chats/>,
				children: [
					{
						path: ':id',
						element: <Chats/>,
					}
				]
			},
			{
				path: '/files',
				element: <Files/>,
			},
			{
				path: '/setting',
				element: <Setting/>,
			},
		],
	},
])

export default muiRouter
