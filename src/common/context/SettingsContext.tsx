

import { createContext, useState, ReactNode } from 'react'
import { PaletteMode } from '@/common/types/theme'
import themeConfig from '@/configs/themeConfig'

export type Settings = {
  mode: PaletteMode;
  // navVisible: boolean;
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};

const initialSettings: Settings = {
	mode: localStorage.getItem('theme') as PaletteMode ??  themeConfig.mode,
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

	return (
		<SettingsContext.Provider value={{ settings, saveSettings }}>
			{children}
		</SettingsContext.Provider>
	)
}

export const SettingsConsumer = SettingsContext.Consumer
