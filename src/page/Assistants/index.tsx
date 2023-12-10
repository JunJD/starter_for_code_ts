import SidePane from '@/components/SidePane'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import { FocusTrap } from '@mui/base/FocusTrap'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded'
import AssistantList from '@/components/AssistantList'
import { useEffect, useState } from 'react'
import { AssistantType } from '@/common/types/assistant'
import PageMain from '@/components/PageMain'

import { Outlet } from 'react-router-dom'
import WriteChats from '@/components/WriteChats'
import { threadsCreate } from '@/server/threads.modules/threads.controller'
import { Assistant2, Run, Thread } from '@/server/types'
import { AsssistantListGet } from '@/server/assistant.modules/assistant.service'
import { CreateRunResult, runCreate } from '@/server/run.modules/run.controller'
import { runRetrieve } from '@/server/run.modules/run.service'
import { /*messageCreate,*/ messageListByThread } from '@/server/messages.modules/messages.service'
import { threadsListGet } from '@/server/threads.modules/threads.service'
import { assistantListState } from '@/RecoilAtomStore/gpt/asssistantList'
import { useRecoilState } from 'recoil'

enum executeEnum {
	continue,
	done
}

const Assistants = () => {
	const [open, setOpen] = useState(false)
	const [assistantList, setAssistantList] = useState<AssistantType[]>([])
	const [assistants, setAssistants] = useState<Array<Assistant2>>([])

	const [assistants2] = useRecoilState<Assistant2[]>(assistantListState)
	useEffect(() => {
		getAssistantList();
		(async () => {
			const list = await AsssistantListGet()
			setAssistants(list)
		})()
	}, [])

	useEffect(()=>{
		console.log('assistants2==>', assistants2)
	},[assistants2])

	const getAssistantList = async() => {
		const assistantList = await threadsListGet()
		setAssistantList(assistantList.map((item)=>{
			console.log(item.messagelist?.data[0].content[0].type)
			return {
				name: item.title,
				key: item.id,
				avatar: {
					label: 'R',
					color: 'danger',
				},
				status: 'run',
				tag: 'learn',
				mode: {
					name: 'gpt-3.5-turbo'
				},
				date: item.createdAt,
				title: item.title,
				summary: (item.messagelist?.data[0].content[0].text.value)?.slice(0, 25) || 'JavaScript Web应用程序很难获得并保持可靠的…',
				body: item.messagelist?.data[0].content[0].text.value || `JavaScript Web应用程序很难获得并保持可靠的性能。JavaScript的动态类型系统和垃圾收集暂停没有帮助。如果您不小心偏离了JIT的正常路径，那么看似很小的代码更改可能会导致剧烈的性能下降。
				Rust为程序员提供了低级控制和可靠的性能。它没有困扰JavaScript的非确定性垃圾收集暂停。程序员可以控制间接、单态和内存布局。
				代码大小非常重要，因为.wasm必须通过网络下载。Rust缺少运行时，支持较小的.wasm大小，因为没有像垃圾收集器那样包含额外的膨胀。您只需为实际使用的函数支付(代码大小)
				`,
				color: 'warning.400',
			}
		}))
	}

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
		console.log('create thread success==>', thread)
		// const message = await messageCreate({
		// 	role: 'user',
		// 	content: form.userFirstMessage as string
		// }, thread.id)
		// console.log('create thread success==>', message)
		const done = await runFun({
			assistantId: form.assistant as string
		}, thread.id)
		if(done) {
			const result = await messageListByThread(thread.id)
			console.table(result)
			getAssistantList()
		}

	}

	const runFun = async (params: Run, threadId: Thread['id']) => {
		const run = await runCreate({ ...params }, threadId)
		if(!run) return
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
						<WriteChats assistantList={assistants} onSend={onSend} open={open} onClose={() => setOpen(false)} />
					</FocusTrap>
				</Box>
				<AssistantList data={assistantList} />
			</SidePane>
			<PageMain>
				<Outlet />
			</PageMain></>
	)
}
export default Assistants