import { contextListState } from '@/RecoilAtomStore/Selector/gpt/contextList'
import { DEFAULT_GRID_COLUMNS_CONFIG } from '@/common/context/SettingsContext'
import { useSettings } from '@/common/hooks/useSettings'
import { Context } from '@/common/types/assistant'
// import { getAssistantById } from '@/mock'
import ChatContent from '@/page/Assistants/components/ChatContent'
import { useLayoutEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const Chat = () => {
	const params = useParams()
	const contextList = useRecoilValue(contextListState)

	const { settings, saveSettings } = useSettings()

	useLayoutEffect(() => { // 布局
		saveSettings({
			...settings,
			gridTemplateColumnsConfig: DEFAULT_GRID_COLUMNS_CONFIG
		})
	}, [])

	const assistantInfo: Context | null = useMemo(()=>{
		return contextList.find(it=>{
			return it.key === params.id
		}) ?? null
	}, [params.id])


	return (
		<ChatContent assistantInfo={assistantInfo} />
	)
}
export default Chat