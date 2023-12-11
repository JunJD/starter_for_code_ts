import { DEFAULT_GRID_COLUMNS_CONFIG } from '@/common/context/SettingsContext'
import { useSettings } from '@/common/hooks/useSettings'
import { AssistantType } from '@/common/types/assistant'
// import { getAssistantById } from '@/mock'
import ChatContent from '@/page/Assistants/components/ChatContent'
import { threadsListGet } from '@/server/threads.modules/threads.service'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
	const params = useParams()
	const [assistantInfo, setAssistantInfo] = useState<AssistantType | null>({} as AssistantType)

	const { settings, saveSettings } = useSettings()

	useLayoutEffect(() => {
		saveSettings({
			...settings,
			gridTemplateColumnsConfig: DEFAULT_GRID_COLUMNS_CONFIG
		})
	}, [])

	useEffect(() => {
		if (params.id) {
			getAssistantById2(params.id)
		}
	}, [params])

	const getAssistantById2 = async (id: string) => {
		const assistantList = (await threadsListGet()).data?.map((item) => {
			return {
				name: item.title,
				key: item.id,
				avatar: {
					label: 'R',
					color: 'danger',
				},
				status: 'run',
				tag: 'learn',
				mode: {
					name: 'gpt-3.5-turbo'
				},
				date: item.createdAt,
				title: item.title,
				body: item.firstMsg,
				color: 'warning.400',
			}
		})
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const info = assistantList.find((it: any) => it.key === id as string)
		console.log(info, 'info')
		setAssistantInfo(info as AssistantType)
	}

	return (
		<ChatContent assistantInfo={assistantInfo} />
	)
}
export default Chat