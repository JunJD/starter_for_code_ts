import { useEffect, useState } from 'react'

import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import IconButton from '@mui/joy/IconButton'
import Stack from '@mui/joy/Stack'
import Avatar from '@mui/joy/Avatar'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'
import Dropdown from '@mui/joy/Dropdown'
import Menu from '@mui/joy/Menu'
import MenuButton from '@mui/joy/MenuButton'
import MenuItem from '@mui/joy/MenuItem'
import ListDivider from '@mui/joy/ListDivider'
import Drawer from '@mui/joy/Drawer'
import ModalClose from '@mui/joy/ModalClose'
import DialogTitle from '@mui/joy/DialogTitle'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

import TeamNav from '../Navigation'
import ColorSchemeToggle from '@/components/ColorSchemeToggle'
import { ConfigEnum, getHeaderRouterConfig } from '@/configs/headerRouterConfig'
import { useNavigate, useLocation } from 'react-router-dom'

const headerRouterConfiglist = getHeaderRouterConfig()

export default function Header() {
	const navigate = useNavigate()
	const location = useLocation()
	const [currentActive, setActive] = useState<ConfigEnum>('chats')
	const [open, setOpen] = useState(false)
	const handleTo = (key: ConfigEnum) => {
		navigate(key)
	}
	useEffect(()=>{
		const pathnameList = location.pathname.split('/')
		const targetActive = pathnameList[1] as ConfigEnum
		targetActive !== currentActive &&  setActive(targetActive)
	},[location.pathname])
	return (
		<Box
			sx={{
				display: 'flex',
				flexGrow: 1,
				justifyContent: 'space-between',
			}}
		>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={1}
				sx={{ display: { xs: 'none', sm: 'flex' } }}
			>
				<IconButton
					size="md"
					variant="outlined"
					color="neutral"
					sx={{
						display: { xs: 'none', sm: 'inline-flex' },
						borderRadius: '50%',
					}}
				>
					<LanguageRoundedIcon />
				</IconButton>
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
							sx={{ alignSelf: 'center' }}
						>
							{item.name}
						</Button>
					)
				})}
			</Stack>
			<Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
				<IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
					<MenuRoundedIcon />
				</IconButton>
				<Drawer
					sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
					open={open}
					onClose={() => setOpen(false)}
				>
					<ModalClose />
					<DialogTitle>Ding AI</DialogTitle>
					<Box sx={{ px: 1 }}>
						<TeamNav />
					</Box>
				</Drawer>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: 1.5,
					alignItems: 'center',
				}}
			>
				<Input
					size="sm"
					variant="outlined"
					placeholder="Search anything…"
					startDecorator={<SearchRoundedIcon color="primary" />}
					endDecorator={
						<IconButton
							variant="outlined"
							color="neutral"
							sx={{ bgcolor: 'background.level1' }}
						>
							<Typography level="title-sm" textColor="text.icon">
								⌘ K
							</Typography>
						</IconButton>
					}
					sx={{
						alignSelf: 'center',
						display: {
							xs: 'none',
							sm: 'flex',
						},
					}}
				/>
				<IconButton
					size="sm"
					variant="outlined"
					color="neutral"
					sx={{ display: { xs: 'inline-flex', sm: 'none' }, alignSelf: 'center' }}
				>
					<SearchRoundedIcon />
				</IconButton>
				<ColorSchemeToggle />
				<Dropdown>
					<MenuButton
						variant="plain"
						size="sm"
						sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}
					>
						<Avatar
							src="/images/user.png"
							srcSet="/images/user.png"
							sx={{ maxWidth: '32px', maxHeight: '32px' }}
						/>
					</MenuButton>
					<Menu
						placement="bottom-end"
						size="sm"
						sx={{
							zIndex: '99999',
							p: 1,
							gap: 1,
							'--ListItem-radius': 'var(--joy-radius-sm)',
						}}
					>
						<MenuItem>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<Avatar
									src="/images/user.png"
									srcSet="/images/user.png"
									sx={{ borderRadius: '50%' }}
								/>
								<Box sx={{ ml: 1.5 }}>
									<Typography level="title-sm" textColor="text.primary">
										Rick Sanchez
									</Typography>
									<Typography level="body-xs" textColor="text.tertiary">
										rick@email.com
									</Typography>
								</Box>
							</Box>
						</MenuItem>
						<ListDivider />
						<MenuItem>
							<HelpRoundedIcon />
							Help
						</MenuItem>
						<MenuItem>
							<SettingsRoundedIcon />
							Settings
						</MenuItem>
						<ListDivider />
						<MenuItem component="a" href="/blog/first-look-at-joy/">
							First look at Joy UI
							<OpenInNewRoundedIcon />
						</MenuItem>
						<MenuItem
							component="a"
							href="https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/email"
						>
							Sourcecode
							<OpenInNewRoundedIcon />
						</MenuItem>
						<ListDivider />
						<MenuItem>
							<LogoutRoundedIcon />
							Log out
						</MenuItem>
					</Menu>
				</Dropdown>
			</Box>
		</Box>
	)
}
