
import { useState, useEffect } from 'react'
import { useColorScheme } from '@mui/joy/styles'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'

import IconButton from '@mui/joy/IconButton'
import Tooltip from '@mui/joy/Tooltip'

function ColorSchemeToggle() {
	const { mode, setMode } = useColorScheme()
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])
	if (!mounted) {
		return <IconButton size="sm" variant="outlined" color="primary" />
	}
	return (
		<Tooltip title="更换主题" variant="outlined">
			<IconButton
				id="toggle-mode"
				size="sm"
				variant="plain"
				color="neutral"
				sx={{ alignSelf: 'center' }}
				onClick={() => {
					if (mode === 'light') {
						setMode('dark')
					} else {
						setMode('light')
					}
				}}
			>
				{mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
			</IconButton>
		</Tooltip>
	)
}

export default ColorSchemeToggle