import { SettingsConsumer, SettingsProvider } from '@/common/context/SettingsContext'
import Box, { BoxProps } from '@mui/joy/Box'

const RootWrap = (props: BoxProps) => {

	return (
		<SettingsProvider>
			<SettingsConsumer>
				{({ settings }) => {
					return (
						<Box
							{...props}
							sx={[
								{
									bgcolor: 'background.appBody',
									display: 'grid',
									gridTemplateColumns: settings.gridTemplateColumnsConfig,
									gridTemplateRows: settings.gridTemplateRowsConfig,
									minHeight: '100vh',
								},
								...(Array.isArray(props.sx) ? props.sx : [props.sx]),
							]}
						/>
					)
				}}
				
			</SettingsConsumer>
		</SettingsProvider>
	)
}

export default RootWrap