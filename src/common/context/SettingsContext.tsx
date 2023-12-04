import { createContext, useState, ReactNode, useEffect } from 'react'
import { debounce } from 'lodash'
import { PaletteMode, ColorScales } from '@/common/types/theme'
import themeConfig from '@/configs/themeConfig'
import { breakpointsKeys } from '@/common/types/breakpoints'

type gridTemplateConfigType = Partial<Record<breakpointsKeys, string>> | string

const UNSTAN_HEADER = 64
export const DEFAULT_GRID_COLUMNS_CONFIG =	{
	xs: '1fr',
	sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
	md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
}
export type Settings = {
	mode: PaletteMode;
	color: ColorScales
	isThemeSys: boolean;
	gridTemplateColumnsConfig: gridTemplateConfigType;
	gridTemplateRowsConfig: gridTemplateConfigType;
	headerHeight: number
	// navVisible: boolean; 
};

export type SettingsContextValue = {
	settings: Settings;
	saveSettings: (updatedSettings: Settings) => void;
};

const initialSettings: Settings = {
	mode: (localStorage.getItem('theme') as PaletteMode) ?? themeConfig.mode,
	color: (localStorage.getItem('color') as ColorScales) ?? themeConfig.color,
	isThemeSys: true,
	gridTemplateColumnsConfig: DEFAULT_GRID_COLUMNS_CONFIG,
	headerHeight: UNSTAN_HEADER,
	gridTemplateRowsConfig: `${UNSTAN_HEADER}px 1fr`
	// navVisible: false,
}

// ** 创建 settingContext
export const SettingsContext = createContext<SettingsContextValue>({
	saveSettings: () => null,
	settings: initialSettings,
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
	// ** 维护状态
	const [settings, setSettings] = useState<Settings>({ ...initialSettings })

	const saveSettings = (updatedSettings: Settings) => {
		setSettings(updatedSettings)
	}

	useEffect(() => {
		const themeMedia = window.matchMedia('(prefers-color-scheme: light)')
		const themeSysChange = debounce((e) => {
			if (e.matches) {
				setSettings({
					...settings,
					mode: 'light'
				})
			} else {
				setSettings({
					...settings,
					mode: 'dark'
				})
			}
		})
		if (settings.isThemeSys) {
			themeMedia.addEventListener('change', themeSysChange)
		} else {
			themeMedia.removeEventListener('change', themeSysChange)
		}
		return () => {
			themeMedia.removeEventListener('change', themeSysChange)
		}
	}, [settings])

	return (
		<SettingsContext.Provider value={{ settings, saveSettings }}>
			{children}
		</SettingsContext.Provider>
	)
}

export const SettingsConsumer = SettingsContext.Consumer
