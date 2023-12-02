import { FC, useEffect } from 'react'
import { baseComponents } from '@/common/types/com'
import { Settings } from '@/common/context/SettingsContext'

interface ThemeComponentProps extends baseComponents {
    settings: Settings
}

const ThemeComponent: FC<ThemeComponentProps> = ({children, settings}) => {
	useEffect(()=>{
		// 设置html data-themes
		const themeMountNode = document.querySelector('html')
		const currentTheme = themeMountNode?.getAttribute('data-theme')
		if(currentTheme === settings.mode) {
			console.log('与当前主题色一致')
		}

		themeMountNode?.setAttribute('data-theme', settings.mode)
		localStorage.setItem('theme', settings.mode)
	},[settings])
	return (
		<>
			{children}    
		</>
	)
}

export default ThemeComponent