import { Thread2 } from '@/server/types'
import { atom } from 'recoil'
import remoteFetchInitValEffect from '../../effect/remoteFetchInitValEffect'
import { threadsListGet } from '@/server/threads.modules/threads.service'
import { messageListGet } from '@/server/messages.modules/messages.service'

export const threadListState = atom<Array<Thread2>>({
	key: 'threadListState', // unique ID (with respect to other atoms/selectors)
	default: [], // default value (aka initial value)
	effects: [
		remoteFetchInitValEffect(async () => {
			const res = await threadsListGet()
			const list = res.data
			const messagelist = await Promise.all(list.map(async (item) => {
				const list = await messageListGet(item.id)
				return list.data
			}))
			
			const findMsg = (threadId: string) => {
				const firstMsg = new Set()
				if( messagelist && Array.isArray(messagelist) ) {
					messagelist.forEach(messages=>{
						messages.forEach(msg=>{
							if(msg.thread_id === threadId && msg.role === 'assistant' ) {
								msg.content.forEach(con=>{
									if(con.type==='text') {
										firstMsg.add(con.text.value)
									}
								})
							}
						})
					})
				}
				return Array.from(firstMsg).filter(Boolean).join('\n')
			}

			const findAss = (threadId: string) =>{
				const AssistantSet = new Set()
				if( messagelist && Array.isArray(messagelist) ) {
					messagelist.forEach(messages=>{
						messages.forEach(msg=>{
							if(msg.thread_id === threadId) {
								AssistantSet.add(msg.assistant_id)
							}
						})
					})
				}
				return Array.from(AssistantSet).filter(Boolean)
			}
			
			return {
				data: res.data.map(i => ({
					...i,
					firstMsg: findMsg(i.id),
					assistants: findAss(i.id),
					messagelist
				}))
			}
		})
	],
})