// import { AssistantType } from '@/common/types/assistant'
// import { getAssistantById } from '@/mock'

import AssistransSettingContent from '@/page/Setting/components/AssistransSettingContent'
import SettingFilter from '../Setting/components/settingFilter'
import { useNavigate } from 'react-router-dom'

import { useLayoutEffect } from 'react'
import { useSettings } from '@/common/hooks/useSettings'
import { DEFAULT_GRID_COLUMNS_CONFIG } from '@/common/context/SettingsContext'
// import { useMemo } from 'react'
// import { useParams } from 'react-router-dom'

const SettingRecord = () => {
	// const params = useParams()
	// const assistantInfo: AssistantType | null = useMemo(()=>{
	// 	if(!params.id) return null
	// 	return getAssistantById(params.id!)
	// }, [params])

	const {settings, saveSettings} = useSettings()
	
	useLayoutEffect(()=>{
		saveSettings({
			...settings,
			gridTemplateColumnsConfig: DEFAULT_GRID_COLUMNS_CONFIG
		})
	},[])
	
	const navigate = useNavigate()
	const handleCreateAssitans = () => {
		navigate('/setting/create')
	}
	
	return (
		<>
			<SettingFilter handleCreateAssitans={handleCreateAssitans}/>
			<AssistransSettingContent/>
		</>
	)
}
export default SettingRecord