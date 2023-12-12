import { ResultMessage, Thread2 } from '@/server/types'
import { atom } from 'recoil'
import remoteFetchInitValEffect from '../../effect/remoteFetchInitValEffect'
import { threadsListGet } from '@/server/threads.modules/threads.service'
import { messageListGet } from '@/server/messages.modules/messages.service'

export const findMsgByThreadId = (threadId: string, messagelist: ResultMessage[][]): Thread2['msgs'] => {
	const msgs = new Set()
	if (messagelist && Array.isArray(messagelist)) {
		messagelist.forEach(messages => {
			messages.forEach(msg => {
				if (msg.thread_id === threadId) {
					msg.content.forEach(con => {
						if (con.type === 'text') {
							msgs.add([msg.role, con.text.value])
						}
					})
				}
			})
		})
	}
	return Array.from(msgs).filter(Boolean) as Thread2['msgs']
}
 
export const findAssByThreadId = (threadId: string, messagelist: ResultMessage[][]): Thread2['assistants'] => {
	const AssistantSet = new Set()
	if (messagelist && Array.isArray(messagelist)) {
		messagelist.forEach(messages => {
			messages.forEach(msg => {
				if (msg.thread_id === threadId) {
					AssistantSet.add(msg.assistant_id)
				}
			})
		})
	}
	return Array.from(AssistantSet).filter(Boolean) as Thread2['assistants']
}

const fetch = async () => {
	const res = await threadsListGet()
	const list = res.data
	const messagelist = await Promise.all(list.map(async (item) => {
		const list = await messageListGet(item.id)
		return list.data
	}))

	return {
		data: res.data.map(i => ({
			...i,
			msgs: findMsgByThreadId(i.id, messagelist),
			firstMsg: findMsgByThreadId(i.id, messagelist)[0][1],
			assistants: findAssByThreadId(i.id, messagelist),
			messagelist
		}))
	}
}

export const threadListState = atom<Array<Thread2>>({
	key: 'threadListState', // unique ID (with respect to other atoms/selectors)
	default: [], // default value (aka initial value)
	effects: [
		remoteFetchInitValEffect(fetch)
	],
})