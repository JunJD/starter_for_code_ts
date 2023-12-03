
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'; import { FC } from 'react'
import { baseComponents } from '@/common/types/com'

import { StyledEngineProvider } from '@mui/joy/styles'

const Providers: FC<baseComponents> = ({ children }) => {
	return (
		<StyledEngineProvider>
			<CssVarsProvider disableTransitionOnChange>
				<CssBaseline />
				{children}
			</CssVarsProvider>

		</StyledEngineProvider>
	)
}

export default Providers
