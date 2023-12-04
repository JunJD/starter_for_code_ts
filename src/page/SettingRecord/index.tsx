// import { AssistantType } from '@/common/types/assistant'
// import { getAssistantById } from '@/mock'

import SettingContent from '@/page/Setting/components/SettingContent'
import SettingFilter from '../Setting/components/settingFilter'
import { useNavigate } from 'react-router-dom'

// import { useMemo } from 'react'
// import { useParams } from 'react-router-dom'

const SettingDisplay = () => {
	// const params = useParams()
	// const assistantInfo: AssistantType | null = useMemo(()=>{
	// 	if(!params.id) return null
	// 	return getAssistantById(params.id!)
	// }, [params])
	const navigate = useNavigate()
	const handleCreateAssitans = () => {
		navigate('/setting/create')
	}
	
	return (
		<>
			<SettingFilter handleCreateAssitans={handleCreateAssitans}/>
			<SettingContent/></>
	)
}
export default SettingDisplay