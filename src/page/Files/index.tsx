import { useSettings } from '@/common/hooks/useSettings'
import FileSummary from '../FileSummary'
import { useLayoutEffect } from 'react'

const Files = () => {
	const { settings, saveSettings } = useSettings()
	useLayoutEffect(()=>{
		saveSettings({
			...settings,
			gridTemplateColumnsConfig: {
				xs: '1fr',
				sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
				md: 'minmax(160px, 300px) minmax(600px, 1fr) minmax(300px, 420px)'
			}
		})
	},[])
	return (
		<>
			<FileSummary/>
		</>
	)
}
export default Files