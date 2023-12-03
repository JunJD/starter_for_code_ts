import * as React from 'react'
// import { CssVarsProvider } from '@mui/joy/styles'
// import CssBaseline from '@mui/joy/CssBaseline'
import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'


import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import Navigation from './Navigation'
import RootWrap from './RootWrap'
import HeaderWrap from './HeaderWrap'
import NavigationWrap from './NavigationWrap'

export default function TeamExample() {
	const [drawerOpen] = React.useState(false)


	return (
		<div>
			<Stack
				id="tab-bar"
				direction="row"
				justifyContent="space-around"
				spacing={1}
				sx={{
					display: { xs: 'flex', sm: 'none' },
					zIndex: '999',
					bottom: 0,
					position: 'fixed',
					width: '100dvw',
					py: 2,
					backgroundColor: 'background.body',
					borderTop: '1px solid',
					borderColor: 'divider',
				}}
			>
				<Button
					variant="plain"
					color="neutral"
					component="a"
					href="/joy-ui/getting-started/templates/email/"
					size="sm"
					startDecorator={<EmailRoundedIcon />}
					sx={{ flexDirection: 'column', '--Button-gap': 0 }}
				>
          Email
				</Button>
				<Button
					variant="plain"
					color="neutral"
					aria-pressed="true"
					component="a"
					href="/joy-ui/getting-started/templates/team/"
					size="sm"
					startDecorator={<PeopleAltRoundedIcon />}
					sx={{ flexDirection: 'column', '--Button-gap': 0 }}
				>
          Team
				</Button>
				<Button
					variant="plain"
					color="neutral"
					component="a"
					href="/joy-ui/getting-started/templates/files/"
					size="sm"
					startDecorator={<FolderRoundedIcon />}
					sx={{ flexDirection: 'column', '--Button-gap': 0 }}
				>
          Files
				</Button>
			</Stack>
			<RootWrap
				sx={{
					...(drawerOpen && {
						height: '100vh',
						overflow: 'hidden',
					}),
				}}
			>
				<HeaderWrap>
					<Header />
				</HeaderWrap>
				<NavigationWrap>
					<Navigation />
				</NavigationWrap>

				<Outlet/>
			</RootWrap>
		</div>
	)
}
