import { useSettings } from '@/common/hooks/useSettings'
import { PaletteMode } from '@/common/types/theme'
import './index.less'
const HelloWrold = () => {
	const { settings, saveSettings } = useSettings()
	const switchTheme = (mode: PaletteMode) => {
		saveSettings({
			...settings,
			mode,
		})
	}
	const handlesys = () => {
		saveSettings({
			...settings,
			isThemeSys: !settings.isThemeSys
		})
	}
	return (
		<div>
			<div>当前主题： {settings.mode}</div>
			<div>是否跟随系统: {settings.isThemeSys? '是': '否'}</div>
			<button
				onClick={() => {
					switchTheme('dark')
				}}
			>
        切换dark
			</button>
			<button
				onClick={() => {
					switchTheme('light')
				}}
			>
        切换light
			</button>
			<button onClick={handlesys}>切换</button>
		</div>
	)
}

export default HelloWrold
