import Box, { BoxProps } from '@mui/joy/Box'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import IconButton from '@mui/joy/IconButton'

import { TravelExplore } from '@mui/icons-material'

export default function EditorToolbar(props: BoxProps) {
	const { sx, ...other } = props
	return (
		<Box
			{...other}
			sx={[
				{ display: 'flex', gap: 0.5, '& > button': { '--Icon-fontSize': '16px' } },
				...(Array.isArray(sx) ? sx : [sx]),
			]}
		>
			<Select size="sm" defaultValue="1" sx={{ minWidth: 160 }}>
				<Option value="1">对话式</Option>
				<Option value="2" sx={{ fontFamily: 'code' }}>
					生成式
				</Option>
			</Select>
			<IconButton size="sm" variant="solid" color="success" sx={{ display: 'flex', gap: 1, px: 1 }}>
				<TravelExplore /> 更多指令
			</IconButton>
		</Box>
	)
}
