import { assistantListState } from '@/RecoilAtomStore/atom/gpt/asssistantList'
import { threadListState } from '@/RecoilAtomStore/atom/gpt/threadList'
import { Context } from '@/common/types/assistant'
import { Assistant2 } from '@/server/types'
import { selector } from 'recoil'
export const contextListState = selector<Context[]>({
	key: 'contextListState',
	get: ({ get }) => {
		const list = get(threadListState)
		const list2 = get(assistantListState)

		return list.map(thread => {
			let assistant: Assistant2 = {} as Assistant2
			thread.assistants?.forEach(assistantId => {
				assistant = list2.find(a => a.id === assistantId) as Assistant2
			})
			return {
				...thread,
				assistant,
				name: assistant ? assistant.name : '-',
				mode: {
					name: assistant ? assistant.model : '-',
				},
				key: thread.id,
				status: 'run',
				tag: 'learn',
				date: thread.createdAt,
				title: thread.title,
				body: thread.firstMsg,
				color: 'warning.400',
			}
		}) as unknown as Context[]
	},
})