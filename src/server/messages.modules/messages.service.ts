import { Message, ResultMessage, Thread, Thread2, listResult } from '../types'
export const messageCreate = async(params: Message, threadId: Thread['id']): Promise<ResultMessage> => {
	const response = await fetch(`${process.env.FETCH_BASE_URL}/v1/threads/${threadId}/messages`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' +  process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
		body: JSON.stringify({
			role: 'user',
			content: params.content ?? [],
			metadata: params.metadata ?? {},
		})
	})
	const message = await response.json()
	return message
}

export const messageRetrieve = async(threadId: Thread['id'], messageId:Message['id']): Promise<ResultMessage> => {
	const response = await fetch(`${process.env.FETCH_BASE_URL}/v1/threads/${threadId}/messages/${messageId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' +  process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
	})
	const message = await response.json()
	return message
}

export const messageListByThread = async(threadId: Thread['id']): Promise<ResultMessage[]> => {
	const response = await fetch(`${process.env.FETCH_BASE_URL}/v1/threads/${threadId}/messages`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' +  process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
	})
	
	const { data: messagelist } = await response.json()
	
	return messagelist
}



let fitstTimer: number = 0

let list: listResult = { data: [] }

export const messageListGet: (threadId: Thread2['id']) => Promise<listResult<ResultMessage>> = async (threadId) => {

	const currentTimer = Date.now()

	if (fitstTimer && ((currentTimer - fitstTimer) < (1000 * 60)) && list.data.length) {
		fitstTimer = currentTimer
		return list
	}

	fitstTimer = currentTimer

	const response = await fetch(`${process.env.FETCH_BASE_URL}/v1/threads/${threadId}/messages`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
	})
	list = await response.json()
	return list
}

