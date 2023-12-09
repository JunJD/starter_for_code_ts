import Box, { BoxProps } from '@mui/joy/Box'

function SidePane(props: BoxProps) {
	return (
		<Box
			className="SidePane"
			{...props}
			sx={[
				{
					bgcolor: 'background.surface',
					borderRight: '1px solid',
					borderColor: 'divider',
					display: {
						xs: 'none',
						md: 'initial',
					},
				},
				...(Array.isArray(props.sx) ? props.sx : [props.sx]),
			]}
		/>
	)
}

export default SidePane