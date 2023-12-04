import { DEFAULT_GRID_COLUMNS_CONFIG } from '@/common/context/SettingsContext'
import { useSettings } from '@/common/hooks/useSettings'
import { AssistantType } from '@/common/types/assistant'
import { getAssistantById } from '@/mock'
import ChatContent from '@/page/Assistants/components/ChatContent'
import { useLayoutEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
	const params = useParams()
	const assistantInfo: AssistantType | null = useMemo(()=>{
		if(!params.id) return null
		return getAssistantById(params.id!)
	}, [params])
	
	const {settings, saveSettings} = useSettings()
	
	useLayoutEffect(()=>{
		saveSettings({
			...settings,
			gridTemplateColumnsConfig: DEFAULT_GRID_COLUMNS_CONFIG
		})
	},[])
	
	return (
		<ChatContent assistantInfo={assistantInfo} />
	)
}
export default Chat