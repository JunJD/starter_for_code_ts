import { useState, useEffect } from 'react'
import Button from '@mui/joy/Button'
import Stack from '@mui/joy/Stack'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'


import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import Navigation from './Navigation'
import RootWrap from './RootWrap'
import HeaderWrap from './HeaderWrap'
import NavigationWrap from './NavigationWrap'
import { ConfigEnum, getHeaderRouterConfig } from '@/Mui/common/configs/headerRouterConfig'
import { useNavigate, useLocation } from 'react-router-dom'

const headerRouterConfiglist = getHeaderRouterConfig()
export default function TeamExample() {
	const [drawerOpen] = useState(false)

	const navigate = useNavigate()
	const location = useLocation()
	const [currentActive, setActive] = useState<ConfigEnum>('chats')

	const handleTo = (key: ConfigEnum) => {
		navigate(key)
	}
	useEffect(()=>{
		const pathnameList = location.pathname.split('/')
		const targetActive = pathnameList[1] as ConfigEnum
		targetActive !== currentActive &&  setActive(targetActive)
	},[location.pathname])

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
				{headerRouterConfiglist.map((item) => {
					return (
						<Button
							key={item.key}
							onClick={() => { handleTo(item.key) }}
							aria-pressed={item.key === currentActive}
							variant="plain"
							color="neutral"
							component="a"
							size="sm"
							startDecorator={<EmailRoundedIcon />}
							sx={{ flexDirection: 'column', '--Button-gap': 0 }}
						>
							{item.name}
						</Button>
					)
				})}
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
