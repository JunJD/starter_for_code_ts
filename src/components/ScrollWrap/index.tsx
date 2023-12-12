import { baseComponents } from '@/common/types/com'
import { FC } from 'react'
import { getDeviceName } from '@/utils/getDevice'
import './index.less'
import { Box, useTheme } from '@mui/joy'
import { SxProps } from '@mui/joy/styles/types'


interface ScrollWrapProps extends baseComponents {
	sx?: SxProps
}

const className = getDeviceName() === 'Mac' ? 'wrap scroll-wrap' : 'wrap scroll-wrap'
console.log('🥑', className)
const ScrollWrap: FC<ScrollWrapProps> = ({ children, sx }) => {

	const theme = useTheme()
	
	return (
		<Box
			sx={{
				overflow: 'auto',
				height: 'auto',
				...(getDeviceName() === 'Mac' && {
					'&::-webkit-scrollbar': {
						width: '6px',
						height: '6px',
					},
					'&::-webkit-scrollbar-thumb': {
						'border-radius': '1em',
						'background-color': 'transparent',
						'transition': 'background-color 3s'
					},
					'&::-webkit-scrollbar-track': {
						'border-radius': '1em',
						'background-color': theme.palette.background.body
					},
					'&:hover': {
						'&::-webkit-scrollbar-thumb': {
							'border-radius': '1em',
							'background-color': theme.palette.neutral.outlinedBorder,
						},
					}
				}),
				...sx
			}}
		>
			{children}
		</Box>
	)
}

export default ScrollWrap
