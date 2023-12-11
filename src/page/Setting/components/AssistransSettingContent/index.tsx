import PageMain from '@/components/PageMain'
import { Avatar, Box, Button, Chip, Divider,  List, Sheet, Typography } from '@mui/joy'
import { DeleteRounded, EditRounded, ExpandMoreTwoTone } from '@mui/icons-material'

import { Assistant, Assistant2 } from '@/server/types'
import { AsssistantDelete } from '@/server/assistant.modules/assistant.controller'
import DropdownRender, { DropdownRenderProps } from '@/components/DropdownRender'
import { Operate } from '@/common/types/com'
import { assistantListState } from '@/RecoilAtomStore/atom/gpt/asssistantList'
import { useRecoilState } from 'recoil'

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
	const [assistants, setAssistants] = useRecoilState<Assistant2[]>(assistantListState)

	const handleCommand = (key: Operate, id: Assistant['id']) => {
		if(key === 'delete') {
			handleDeleteModel(id)
		}
	}
	
	const handleDeleteModel = async (id: Assistant['id']) => {
		const result = await AsssistantDelete(id)
		if (result.deleted) {
			setAssistants((prev: Assistant2[]) => {
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
				{assistants.map((assistant, index) => (
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
								<Typography level="title-md">{assistant.name}</Typography>
								<Typography level="body-xs">{assistant.description}</Typography>
							</Box>
							<DropdownRender
								onCommond={(commnd)=>{ handleCommand(commnd, assistant.id) }}
								renderList={assistantsMenuRenderList}
							/>
						</Box>
						<Divider component="div" sx={{ my: 2 }} />
						<Typography level="body-xs">{assistant.instructions}</Typography>
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
							{assistant.tools.map((tool, toolIndex) => (
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