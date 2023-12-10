import store, { defaultTables } from '@/localBase'
import { CreateResult, DeleteResult, ResultMessage, Thread } from '../types'

const threadTablePromise = (async()=>{
	if(defaultTables.includes('thread')){
		await store.awaitReady()
		return store.getTbale('thread')
	}
})()
console.log(threadTablePromise)
export const threadsCreate = async (params: Partial<Thread>): Promise<CreateResult> => {
	const response = await window.fetch(`${process.env.FETCH_BASE_URL}/v1/threads`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
		body: JSON.stringify({
			messages: params.messages ?? [],
			metadata: params.metadata ?? {},
		})
	})
	const threads = await response.json()

	const threadTable = await threadTablePromise
	if(threadTable) {
		threadTable.setItem(threads.id, {
			id: threads.id,
			createdAt: threads.created_at,
			title: threads.metadata.title
		}).then(function (value) {
			console.log(value)
		})
	}
	
	if (threads.error) {
		throw new Error(threads.error.message)
	}
	return threads
}

export const threadsDelete = async (threadId: Thread['id']): Promise<DeleteResult> => {
	const response = await window.fetch(`${process.env.FETCH_BASE_URL}/v1/threads/${threadId}` , {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
	})
	const deleteResult = await response.json()
	const threadTable = await threadTablePromise
	if(threadTable) {
		threadTable.removeItem(threadId).then(function (value) {
			console.log(value)
		})
	}
	if (deleteResult.error) {
		throw new Error(deleteResult.error.message)
	}
	return deleteResult
}

interface Thread2 {
	id: string,
	createdAt: string,
	title: string,
	messagelist?: { data: ResultMessage[] }
}

export const threadsListGet =  async() => {
	const threadTable = await threadTablePromise
	const threadsList: Thread2[] = []
	await threadTable?.iterate<Thread2, void>((value)=>{
		threadsList.push(value)
	})
	threadsList[0].messagelist?.data[0].content[0]
	return threadsList
}
