
import Box, { BoxProps } from '@mui/joy/Box'


function NavigationWrap(props: BoxProps) {
	return (
		<Box
			component="nav"
			className="Navigation"
			{...props}
			sx={[
				{
					p: 2,
					bgcolor: 'background.surface',
					borderRight: '1px solid',
					borderColor: 'divider',
					display: {
						xs: 'none',
						sm: 'initial',
					},
					transform: 'all .3s'
				},
				...(Array.isArray(props.sx) ? props.sx : [props.sx]),
			]}
		/>
	)
}

export default NavigationWrap