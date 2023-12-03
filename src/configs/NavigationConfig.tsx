import { ReactNode } from 'react'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'


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
export const getNavigationConfigList = (): groupType[] => {
	return [
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
}