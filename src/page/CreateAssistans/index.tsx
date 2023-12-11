import { Box } from '@mui/joy'
import AssistansProfile from '@/page/CreateAssistans/components/AssistansProfile'
import { useSettings } from '@/common/hooks/useSettings'
import { useLayoutEffect } from 'react'
import ScrollWrap from '@/components/ScrollWrap'

const CreateAssistans = () => {
	const { settings, saveSettings } = useSettings()
	useLayoutEffect(()=>{
		saveSettings({
			...settings,
			gridTemplateColumnsConfig: {
				xs: '1fr',
				sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
				md: 'minmax(160px, 300px) minmax(800px, 1fr)', 
			}
		})
	},[])
	return (
		<Box
			component="main"
			className="MainContent"
			sx={{
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				minWidth: 0,
				height: `calc(100dvh - ${settings?.headerHeight || 64}px)`,
				gap: 1,
				overflow: 'auto',
			}}
		>

			<ScrollWrap>
				<AssistansProfile />
			</ScrollWrap>
		</Box>
	)
}

export default CreateAssistans