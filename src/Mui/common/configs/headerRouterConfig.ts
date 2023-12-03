export type ConfigEnum = 'chats' | 'files' | 'setting'
export interface RouterConfigType {
    name: string,
    key: ConfigEnum
}

export const getHeaderRouterConfig = (): RouterConfigType[] => {
	return [
		{
			name: '我的助手',
			key: 'chats'
		},
		{
			name: '文件管理',
			key: 'files'
		},
		{
			name: '助手设置',
			key: 'setting'
		}
	]
}
