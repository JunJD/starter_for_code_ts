
import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'
import Layout from '@/layout'
import Files from '@/page/Files'
import Assistant from '@/page/Assistants'
import Chat from '@/page/Chat'
import Setting from '@/page/Setting'
import FileDisplay from '@/page/SettingRecord'
import CreateAssistans from '@/page/CreateAssistans'

const muiRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <Navigate to="/chats" replace />,
			},
			{
				path: '/chats',
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
						path: '/chats',
						loader: async(content) => {
							console.log(content)
							return redirect('/chats/sgahuivh')
						},
					},
					{
						path: ':id',
						element: <Chat/>,
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
						element: <FileDisplay/>,
					}
				]
			},
		],
	},
])

export default muiRouter
