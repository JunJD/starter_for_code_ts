import PageMain from '@/components/PageMain'
import { Avatar, Box, Button, Chip, Divider,  List, ListItem, ListItemContent, ListItemDecorator, Sheet, Typography } from '@mui/joy'
import { DeleteRounded, EditRounded, ExpandMoreTwoTone } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { AsssistantListGet } from '@/server/assistant.modules/assistant.service'
import { Assistant } from '@/server/types'
import { AsssistantDelete } from '@/server/assistant.modules/assistant.controller'
import DropdownRender, { DropdownRenderProps } from '@/components/DropdownRender'
import { Operate } from '@/common/types/com'

const assistantsMenuRenderList: DropdownRenderProps['renderList'] = [
	{
		icon: <EditRounded/>,
		label: '编辑',
		command: 'edit'
	},
	{
		icon: <DeleteRounded/>,
		label: '删除',
		color: 'danger',
		command: 'delete'
	}
]


const AssistransSettingContent = () => {
	const [asssistantList, setAssistantList] = useState<Assistant[]>([])

	useEffect(() => {
		getAssistantList()
	}, [])

	const getAssistantList = async () => {
		const list = await AsssistantListGet()
		setAssistantList(list.map(item => ({
			...item,
			companyData: [
				{
					role: 'Rust中的abcd',
					name: 'token消耗12090',
					years: '2023-12-06',
				},
				{
					role: 'Rust中的2121',
					name: 'token消耗12090',
					years: '2023-12-07',
				},
			],
		})))
	}

	const handleCommand = (key: Operate, id: Assistant['id']) => {
		if(key === 'delete') {
			handleDeleteModel(id)
		}
	}
	
	const handleDeleteModel = async (id: Assistant['id']) => {
		const result = await AsssistantDelete(id)
		if (result.deleted) {
			setAssistantList((prev: Assistant[]) => {
				return prev.filter(it => it.id !== id)
			})
		} else {
			alert('删除失败')
		}
	}

	return (
		<PageMain>
			<List
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
					gap: 2,
				}}
			>
				{asssistantList.map((person, index) => (
					<Sheet
						key={index}
						component="li"
						variant="outlined"
						sx={{
							borderRadius: 'sm',
							p: 2,
							listStyle: 'none',
						}}
					>
						<Box sx={{ display: 'flex', gap: 2 }}>
							<Avatar
								variant="outlined"
								sx={{ borderRadius: '50%' }}
							/>
							<Box sx={{ marginRight: 'auto' }} >
								<Typography level="title-md">{person.name}</Typography>
								<Typography level="body-xs">{person.instructions}</Typography>
							</Box>
							<DropdownRender
								onCommond={(commnd)=>{ handleCommand(commnd, person.id) }}
								renderList={assistantsMenuRenderList}
							/>
						</Box>
						<Divider component="div" sx={{ my: 2 }} />
						<List sx={{ '--ListItemDecorator-size': '40px', gap: 2 }}>
							{person.companyData.map((company, companyIndex) => (
								<ListItem key={companyIndex} sx={{ alignItems: 'flex-start' }}>
									<ListItemDecorator
										sx={{
											'&:before': {
												content: '""',
												position: 'absolute',
												height: '100%',
												width: '1px',
												bgcolor: 'divider',
												left: 'calc(var(--ListItem-paddingLeft) + 12px)',
												top: '50%',
											},
										}}
									>
										<Avatar
											sx={{ '--Avatar-size': '24px' }}
										/>
									</ListItemDecorator>
									<ListItemContent>
										<Typography level="title-sm">{company.role}</Typography>
										<Typography level="body-xs">{company.name}</Typography>
									</ListItemContent>
									<Typography level="body-xs">{company.years}</Typography>
								</ListItem>
							))}
						</List>
						<Button
							size="sm"
							variant="plain"
							endDecorator={<ExpandMoreTwoTone fontSize="small" />}
							sx={{ px: 1, mt: 1 }}
						>
							Expand
						</Button>
						<Divider component="div" sx={{ my: 2 }} />
						<Typography level="title-sm">Tool tags:</Typography>
						<Box sx={{ mt: 1.5, display: 'flex', gap: 1 }}>
							{person.tools.map((tool, toolIndex) => (
								<Chip
									key={toolIndex}
									variant="outlined"
									color="neutral"
									size="sm"
								>
									{tool.type}
								</Chip>
							))}
						</Box>
					</Sheet>
				))}
			</List>
		</PageMain>

	)
}

export default AssistransSettingContent