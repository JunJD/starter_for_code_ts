import SidePane from '@/components/SidePane'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import { FocusTrap } from '@mui/base/FocusTrap'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded'
import AssistantList from '@/components/AssistantList'
import { useState } from 'react'
import PageMain from '@/components/PageMain'
import { useRecoilValue } from 'recoil'
import { Outlet } from 'react-router-dom'
import WriteChats from '@/components/WriteChats'
import { threadsCreate } from '@/server/threads.modules/threads.controller'
import { Assistant2, Run, Thread } from '@/server/types'
import { CreateRunResult, runCreate } from '@/server/run.modules/run.controller'
import { runRetrieve } from '@/server/run.modules/run.service'
import { assistantListState } from '@/RecoilAtomStore/atom/gpt/asssistantList'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { contextListState } from '@/RecoilAtomStore/Selector/gpt/contextList'
import { messageListByThread } from '@/server/messages.modules/messages.service'
import { findAssByThreadId, findMsgByThreadId, threadListState } from '@/RecoilAtomStore/atom/gpt/threadList'

enum executeEnum {
	continue,
	done
}

const Assistants = () => {
	const [open, setOpen] = useState(false)

	const [assistants] = useRecoilState<Assistant2[]>(assistantListState)
	const setThreadList = useSetRecoilState(threadListState)
	const contextList = useRecoilValue(contextListState)


	const onSend = async (form: { [k: string]: FormDataEntryValue }) => {
		const thread = await threadsCreate({
			messages: [{
				role: 'user',
				content: form.userFirstMessage as string
			}],
			metadata: {
				title: form.title as string
			},
		})
		const done = await runFun({
			assistantId: form.assistant as string
		}, thread.id)
		if (done) {
			const data = await messageListByThread(thread.id)
			setThreadList(prev => {
				return [...prev, {
					id: thread.id,
					createdAt: thread.created_at,
					title: thread.metadata.title,
					firstMsg: findMsgByThreadId(thread.id, [data]),
					assistants: findAssByThreadId(thread.id, [data]),
					messagelist: [data]
				}]
			})
		}

	}

	const runFun = async (params: Run, threadId: Thread['id']) => {
		const run = await runCreate({ ...params }, threadId)
		if (!run) return
		const execute = await resultOfAwait(run, 1000)
		if (execute === executeEnum.continue) {
			await runRetrieveFun(run.id, threadId)
			return Promise.resolve(true)
		} else if (execute === executeEnum.done) {
			console.log('message')
			return Promise.resolve(false)
		}
	}

	const runRetrieveFun = async (runId: CreateRunResult['id'], threadId: Thread['id']) => {
		const run = await runRetrieve(runId, threadId)
		const execute = await resultOfAwait(run)
		if (execute === executeEnum.continue) {
			await runRetrieveFun(runId, threadId)
		} else if (execute === executeEnum.done) {
			console.log('message')
		}
	}

	const resultOfAwait = async (run: CreateRunResult, delay: number = 300): Promise<executeEnum> => {
		return new Promise((resolve, reject) => {
			switch (run.status) {
			case 'queued':
			case 'requires_action':
			case 'in_progress':
			case 'cancelling':
				setTimeout(() => {
					resolve(executeEnum.continue)
				}, delay)
				break
			case 'failed':
			case 'expired':
				reject(new Error('failed'))
				console.log('出错了！')
				break
			case 'cancelled':
				resolve(executeEnum.done)
				console.log('取消成功')
				break
			case 'completed':
				resolve(executeEnum.done)
				console.log('成功了！')
				console.table(run)
				break
			}
		})
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
							{contextList.length} chats
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
						<WriteChats assistantList={assistants} onSend={onSend} open={open} onClose={() => setOpen(false)} />
					</FocusTrap>
				</Box>
				<AssistantList data={contextList} />
			</SidePane>
			<PageMain>
				<Outlet />
			</PageMain></>
	)
}
export default Assistants