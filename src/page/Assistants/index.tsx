import SidePane from '@/components/SidePane'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import { FocusTrap } from '@mui/base/FocusTrap'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded'
import AssistantList from '@/components/AssistantList'
import { useEffect, useState } from 'react'
import { getAssistantList } from '@/mock'
import { AssistantType } from '@/common/types/assistant'
import PageMain from '@/components/PageMain'

import { Outlet } from 'react-router-dom'
import WriteChats from '@/components/WriteChats'
import { threadsCreate } from '@/server/threads.modules/threads.controller'

const Assistants = () => {
	const [open, setOpen] = useState(false)
	const [assistantList, setAssistantList] = useState<AssistantType[]>([])
	useEffect(() => {
		setAssistantList(getAssistantList())
	}, [])

	const onSend = async (form: {[k: string]: FormDataEntryValue}) => {
		const thread =  await threadsCreate({
			messages: [{
				role: 'user',
				content: form.userFirstMessage as string
			}],
			metadata: {
				title: form.title as string
			},
		})
		console.log('create thrend success==>',  thread)
	}
	
	return (
		<>
			<SidePane>
				<Box
					sx={{
						p: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Box sx={{ alignItems: 'center', gap: 1 }}>
						<Typography level="title-lg" textColor="text.secondary">
							My assistant
						</Typography>
						<Typography level="title-sm" textColor="text.tertiary">
							{assistantList.length} chats
						</Typography>
					</Box>
					<Button
						size="sm"
						startDecorator={<CreateRoundedIcon />}
						onClick={() => setOpen(true)}
						sx={{ ml: 'auto' }}
					>
						Chat to the AI Assistant
					</Button>
					<FocusTrap open={open} disableAutoFocus disableEnforceFocus>
						<WriteChats onSend={onSend}  open={open} onClose={() => setOpen(false)} />
					</FocusTrap>
				</Box>
				<AssistantList data={assistantList} />
			</SidePane>
			<PageMain>
				<Outlet/>
			</PageMain></>
	)
}
export default Assistants