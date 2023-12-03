
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/Mui/layout'
import Files from '@/Mui/page/Files'
import Chats from '@/Mui/page/Chats'
import Config from '@/Mui/page/Config'
const muiRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/chats',
				element: <Chats/>,
			},
			{
				path: '/files',
				element: <Files/>,
			},
			{
				path: '/config',
				element: <Config/>,
			},
		],
	},
])

export default muiRouter
