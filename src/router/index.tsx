
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/layout'
import Files from '@/page/Files'
import Assistant from '@/page/Assistants'
import Chat from '@/page/Chat'
import Setting from '@/page/Setting'
import FileDisplay from '@/page/SettingRecord'
// import CreateAssistans from '@/page/CreateAssistans'
const muiRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/chats',
				element: <Assistant/>,
				children: [
					{
						path: ':id',
						element: <Chat/>,
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
				children: [
					// {
					// 	path: 'create',
					// 	element: <CreateAssistans/>
					// },
					{
						path: ':id',
						element: <FileDisplay/>,
					}
				]
			},
		],
	},
])

export default muiRouter
