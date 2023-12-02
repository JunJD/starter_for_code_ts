import { FC, useEffect, useMemo } from 'react'
import { baseComponents } from '@/common/types/com'
import { Settings } from '@/common/context/SettingsContext'
import { PaletteMode } from '@/common/types/theme'

interface ThemeComponentProps extends baseComponents {
  settings: Settings;
}

const ThemeComponent: FC<ThemeComponentProps> = ({ children, settings }) => {
	const modeSetting = useMemo(() =>  {
		return settings.mode
	}, [settings])

	useEffect(() => {
		const themeMountNode = document.querySelector('html')
		const currentTheme = themeMountNode?.getAttribute(
			'data-theme'
		) as PaletteMode
		if (currentTheme === modeSetting) {
			console.log('与当前主题色一致')
		}
		// 设置html data-themes
		themeMountNode?.setAttribute('data-theme', modeSetting)
		localStorage.setItem('theme', modeSetting)
	}, [modeSetting])
	return <>{children}</>
}

export default ThemeComponent
