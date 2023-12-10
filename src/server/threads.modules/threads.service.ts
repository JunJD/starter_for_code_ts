import { CreateResult, Thread } from '../types'

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
	if (threads.error) {
		throw new Error(threads.error.message)
	}
	return threads
}
