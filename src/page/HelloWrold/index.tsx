import { useSettings } from '@/common/hooks/useSettings'
import { PaletteMode } from '@/common/types/theme'

const HelloWrold = () => {
	const { settings, saveSettings } = useSettings()
	const switchTheme = (mode: PaletteMode) => {
		saveSettings({
			mode,
		})
	}
	return (
		<div>
			<div>当前主题： {settings.mode}</div>
			<button onClick={()=>{switchTheme('dark')}}>切换dark</button>
			<button onClick={()=>{switchTheme('light')}}>切换light</button>
		</div>
	)
}

export default HelloWrold
