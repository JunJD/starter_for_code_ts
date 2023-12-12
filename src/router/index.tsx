
import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'
import Layout from '@/layout'
import Files from '@/page/Files'
import Assistant from '@/page/Assistants'
import ChatOfAssistants from '@/page/ChatOfAssistants'
import Setting from '@/page/Setting'
import SettingRecord from '@/page/SettingRecord'
import CreateAssistans from '@/page/CreateAssistans'
import AssistantsUnawakening from '@/page/Assistants/components/AssistantsUnawakening'

const muiRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <Navigate to="/assistant" replace />,
			},
			{
				path: '/assistant',
				element: <Assistant/>,
				loader: async() => {
					return new Promise((resolve)=>{
						setTimeout(()=>{
							resolve([1])
						},20)
					})
				},
				children: [
					{
						path: '/assistant',
						loader: async() => {
							return redirect('/assistant/null')
						},
					},
					{
						path: 'null',
						element: <AssistantsUnawakening/>,
					},
					{
						path: ':id',
						element: <ChatOfAssistants/>,
					}
				]
			},
			{
				path: '/files',
				element: <Files/>,
				loader: async() => {
					return new Promise((resolve)=>{
						setTimeout(()=>{
							resolve([2])
						},20)
					})
				},
			},
			{
				path: '/setting',
				element: <Setting/>,
				loader: async(context) => {

					return new Promise((resolve)=>{
						setTimeout(()=>{
							resolve(context)
						},20)
					})
				},
				children: [
					{
						path: '/setting',
						element: <Navigate to="/setting/666" replace />,
					},
					{
						path: 'create',
						element: <CreateAssistans/>,
						loader: async() => {
							return []
						}
					},
					{
						path: ':id',
						element: <SettingRecord/>,
					}
				]
			},
		],
	},
])

export default muiRouter
