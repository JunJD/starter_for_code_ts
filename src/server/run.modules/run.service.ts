import { Run, Thread } from '../types'
import { CreateRunResult } from './run.controller'

export const runCreate = async (params: Run, threadId: Thread['id']): Promise<CreateRunResult|null> => {
	const response = await window.fetch(`${process.env.FETCH_BASE_URL}/v1/threads/${threadId}/runs` , {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
		body: JSON.stringify({
			assistant_id: params.assistantId,
			metadata: params.metadata ?? {},
		})
	})
	const run = await response.json()
	if (run.last_error) {
		console.error(run.last_error.message)
		return null
	}
	return run
}

export const runRetrieve = async (runId: CreateRunResult['id'], threadId: Thread['id']): Promise<CreateRunResult> => {
	const response = await window.fetch(`${process.env.FETCH_BASE_URL}/v1/threads/${threadId}/runs/${runId}` , {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
	})
	const run = await response.json()
	if (run.error) {
		throw new Error(run.error.message)
	}
	return run
}
