import { ReactNode } from 'react'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
import { ConfigEnum } from '@/configs/headerRouterConfig'


type groupType = {
	name: string,
	label: string,
	children: itemType[]
}

export type itemType = {
	name: string,
	label: string,
	chip?: ReactNode | string,
	icon?: ReactNode | string,
}


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const fileConfig = [
	{
		name: 'Browse',
		label: '常用',
		children: [
			{
				name: 'My files',
				label: '我的文件',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
			{
				name: 'Shared files',
				label: '分享文件',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
			{
				name: 'Trash',
				label: '回收站',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
		]
	},
	{
		name: 'TAGS',
		label: '标签',
		children: [
			{
				name: 'Personal',
				label: '个人',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
			{
				name: 'Work',
				label: '工作',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
			{
				name: 'Travels',
				label: '旅行',
				icon: <PeopleRoundedIcon fontSize="small"  />
			}
		]
	},
]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const assistantConfig = [
	{
		name: 'Browse',
		label: '常用',
		children: [
			{
				name: 'assistants',
				label: 'AI 助理',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
			{
				name: 'Trash',
				label: 'chats回收站',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
		]
	},
	{
		name: 'TAGS',
		label: '标签',
		children: [
			{
				name: 'Personal',
				label: '个人',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
			{
				name: 'Work',
				label: '工作',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
			{
				name: 'Travels',
				label: '旅行',
				icon: <PeopleRoundedIcon fontSize="small"  />
			}
		]
	},
]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const settingConfig = [
	{
		name: 'Browse',
		label: '常用',
		children: [
			{
				name: 'set assistants',
				label: '助手列表',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
			{
				name: 'Trash',
				label: 'thread 列表',
				icon: <PeopleRoundedIcon fontSize="small"  />
			},
		]
	}
]

type configListType = Record<ConfigEnum, groupType[]>;

export const getNavigationConfigList = (): configListType => {
	return {
		'chats': assistantConfig,
		'files': fileConfig,
		'setting': settingConfig
	}
}