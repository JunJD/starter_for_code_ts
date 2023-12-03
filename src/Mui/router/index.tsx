
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/Mui/layout'
import Files from '@/Mui/page/Files'
import Chats from '@/Mui/page/Chats'
import Setting from '@/Mui/page/Setting'
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
