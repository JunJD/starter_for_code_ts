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
		const assistantList = (await threadsListGet()).map((item) => {
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
				summary: (item.messagelist?.data[0].content[0].text.value)?.slice(1, 25) || 'JavaScript Web应用程序很难获得并保持可靠的…',
				body: item.messagelist?.data[0].content[0].text.value || `JavaScript Web应用程序很难获得并保持可靠的性能。JavaScript的动态类型系统和垃圾收集暂停没有帮助。如果您不小心偏离了JIT的正常路径，那么看似很小的代码更改可能会导致剧烈的性能下降。
				Rust为程序员提供了低级控制和可靠的性能。它没有困扰JavaScript的非确定性垃圾收集暂停。程序员可以控制间接、单态和内存布局。
				代码大小非常重要，因为.wasm必须通过网络下载。Rust缺少运行时，支持较小的.wasm大小，因为没有像垃圾收集器那样包含额外的膨胀。您只需为实际使用的函数支付(代码大小)
				`,
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