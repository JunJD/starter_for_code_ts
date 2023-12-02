import { useContext } from 'react'
import { SettingsContext, SettingsContextValue } from '@/common/context/SettingsContext'

export const useSettings = (): SettingsContextValue =>
	useContext(SettingsContext)
