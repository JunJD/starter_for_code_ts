import Chip from '@mui/joy/Chip'
import List from '@mui/joy/List'
import ListSubheader from '@mui/joy/ListSubheader'
import ListItem from '@mui/joy/ListItem'
import ListItemButton from '@mui/joy/ListItemButton'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import ListItemContent from '@mui/joy/ListItemContent'

// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
// import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded'
// import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded'
// import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded'
// import TodayRoundedIcon from '@mui/icons-material/TodayRounded'
import { getNavigationConfigList, itemType } from '@/configs/NavigationConfig'
import { useState } from 'react'

const list = getNavigationConfigList()

export default function Navigation() {

	const [currentActive, setActive] = useState<itemType['name']>('My files')
	const handleNav = (name: itemType['name']) => {
		setActive(name)
	}
	return (
		<List
			size="sm"
			sx={{ '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '4px' }}
		>
			{
				list.map((item) => {
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
