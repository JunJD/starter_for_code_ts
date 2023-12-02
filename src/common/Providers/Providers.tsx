import { SettingsConsumer, SettingsProvider } from '../context/SettingsContext'
import { baseComponents } from '@/common/types/com'
import ThemeComponent from '@/common/Providers/ThemeComponent'
import { FC } from 'react'

const Providers: FC<baseComponents> = ({ children }) => {
	return (
		<SettingsProvider>
			<SettingsConsumer>
				{({ settings }) => {
					return (
						<ThemeComponent settings={settings}>{children}</ThemeComponent>
					)
				}}
			</SettingsConsumer>
		</SettingsProvider>
	)
}

export default Providers
