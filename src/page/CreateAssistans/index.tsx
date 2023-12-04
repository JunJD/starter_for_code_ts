import { Box } from '@mui/joy'
import AssistansProfile from '@/page/CreateAssistans/components/AssistansProfile'
import { useSettings } from '@/common/hooks/useSettings'
import { useEffect } from 'react'

const CreateAssistans = () => {
	const { settings, saveSettings } = useSettings()
	useEffect(()=>{
		saveSettings({
			...settings,
			gridTemplateColumnsConfig: {
				xs: '1fr',
				sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
				md: 'minmax(160px, 300px) minmax(500px, 1f4)',
			}
		})
	},[])
	return (
		<Box
			component="main"
			className="MainContent"
			sx={{
				pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
				pb: { xs: 2, sm: 2, md: 3 },
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				minWidth: 0,
				height: '100dvh',
				gap: 1,
				overflow: 'auto',
			}}
		>
			<AssistansProfile />
		</Box>
    
	)
}

export default CreateAssistans