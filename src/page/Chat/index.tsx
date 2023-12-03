import { AssistantType } from '@/common/types/assistant'
import { getAssistantById } from '@/mock'
import ChatContent from '@/page/Assistants/components/ChatContent'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
	const params = useParams()
	const assistantInfo: AssistantType | null = useMemo(()=>{
		if(!params.id) return null
		return getAssistantById(params.id!)
	}, [params])
	
	return (
		<ChatContent assistantInfo={assistantInfo} />
	)
}
export default Chat