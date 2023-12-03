import Chip from '@mui/joy/Chip'
import List from '@mui/joy/List'
import ListSubheader from '@mui/joy/ListSubheader'
import ListItem from '@mui/joy/ListItem'
import ListItemButton from '@mui/joy/ListItemButton'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import ListItemContent from '@mui/joy/ListItemContent'

import { getNavigationConfigList, itemType } from '@/configs/NavigationConfig'
import { useEffect, useMemo, useState } from 'react'
import { ConfigEnum } from '@/configs/headerRouterConfig'
import { useLocation } from 'react-router-dom'

const list = getNavigationConfigList()

export default function Navigation() {
	const location = useLocation()
	const [currentActive, setActive] = useState<itemType['name']>()
	
	const currentSiderList = useMemo(()=>{
		const pathnameList = location.pathname.split('/')
		const targetActive = pathnameList[1] as ConfigEnum
		return list[targetActive]
	},[location.pathname])

	useEffect(()=>{
		currentSiderList[0]?.children[0]?.name && setActive(currentSiderList[0].children[0].name)
	},[location.pathname, currentSiderList[0]?.children[0]?.name])
	
	const handleNav = (name: itemType['name']) => {
		setActive(name)
	}
	return (
		<List
			size="sm"
			sx={{ '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '4px' }}
		>
			{
				currentSiderList.map((item) => {
					return (
						<ListItem nested key={item.name}>
							<ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
								{item.name}
							</ListSubheader>
							<List
								aria-labelledby="nav-list-browse"
								sx={{
									'& .JoyListItemButton-root': { p: '8px' },
								}}
							>
								{
									item.children && item.children.map((child) => {
										return (
											<ListItem key={child.name}>
												<ListItemButton selected={currentActive === child.name} onClick={() => { handleNav(child.name) }}>
													<ListItemDecorator>
														{child.icon}
													</ListItemDecorator>
													<ListItemContent>{child.label}</ListItemContent>
													{child.chip && <Chip variant="soft" color="warning" size="sm">
														{child.chip}
													</Chip>}
												</ListItemButton>
											</ListItem>
										)
									})
								}

							</List>
						</ListItem>
					)
				})
			}
		</List>
	)
}
