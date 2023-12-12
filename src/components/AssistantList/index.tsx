import { FC, Fragment, useEffect, useState } from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Avatar from '@mui/joy/Avatar'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider'
import ListItem from '@mui/joy/ListItem'
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import { Context } from '@/common/types/assistant'
import { useNavigate, useParams } from 'react-router-dom'

const AssistantList: FC<{ data: Context[] }> = ({ data }) => {
	const navigate = useNavigate()
	const params = useParams()
	const [currentActive, setActive] = useState<string>('chats')

	const handleTo = (key: string) => {
		navigate(key)
	}
	useEffect(() => {
		params.id && setActive(params.id)
	}, [params])
	return (
		<List
			sx={{
				[`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
					borderLeft: '2px solid',
					borderLeftColor: 'var(--joy-palette-primary-outlinedBorder)',
				},
			}}
		>
			{data.map((item, index) => (
				<Fragment key={item.key + '_assistant_' + index}>
					<ListItem>
						<ListItemButton
							{...(currentActive === item.key && {
								selected: true,
								color: 'neutral',
							})}
							sx={{ p: 2 }}
							onClick={() => { handleTo(item.key) }}
						>
							<ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
								<Avatar>
									{item.title?.slice(0, 1)}
								</Avatar>
							</ListItemDecorator>
							<Box sx={{ pl: 2, width: '100%' }}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										mb: 0.5,
									}}
								>
									<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
										<Typography level="body-xs">{item.name}</Typography>
										<Box
											sx={{
												width: '8px',
												height: '8px',
												borderRadius: '99px',
												bgcolor: item.color,
											}}
										/>
									</Box>
									<Typography level="body-xs" textColor="text.tertiary">
										{item.date}
									</Typography>
								</Box>
								<div>
									<Typography level="title-sm" sx={{ mb: 0.5 }}>
										{item.title}
									</Typography>
									<Typography sx={{

									}} level="body-sm">{item.body}</Typography>
								</div>
							</Box>
						</ListItemButton>
					</ListItem>
					<ListDivider sx={{ m: 0 }} />
				</Fragment>
			))}
		</List>
	)
}

export default AssistantList
