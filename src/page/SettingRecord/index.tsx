// import { AssistantType } from '@/common/types/assistant'
// import { getAssistantById } from '@/mock'

import AssistransSettingContent from '@/page/Setting/components/AssistransSettingContent'
import SettingFilter from '../Setting/components/settingFilter'
import { useNavigate } from 'react-router-dom'

import { useLayoutEffect } from 'react'
import { useSettings } from '@/common/hooks/useSettings'
import { DEFAULT_GRID_COLUMNS_CONFIG } from '@/common/context/SettingsContext'
import ScrollWrap from '@/components/ScrollWrap'
import SidePane from '@/components/SidePane'


const SettingRecord = () => {
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
			<SidePane
				sx={{
					display: 'flex !important',
					height: `calc(100dvh - ${settings?.headerHeight || 64}px)`,
					overflow: 'auto',
				}}
			>
				<ScrollWrap
					sx={{
						flex: 1
					}}
				>
					<SettingFilter handleCreateAssitans={handleCreateAssitans}/>
				</ScrollWrap>
			</SidePane>

			<AssistransSettingContent/>
		</>
	)
}
export default SettingRecord