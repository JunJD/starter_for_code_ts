import { Assistant, DeleteResult, listResult } from '../types'

export const AsssistantCreate = async (params: Partial<Assistant>) => {
	const response = await window.fetch(`${process.env.FETCH_BASE_URL}/v1/assistants`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
		body: JSON.stringify({
			instructions: params.instructions ?? '',
			tools: params.tools ?? [],
			model: params.model ?? 'gpt-3.5-turbo-1106',
			file_ids: params.fileIds ?? [],
			name: params.name,
			description: params.description ?? '这是' + params.name
		})
	})
	const asssistant = await response.json()
	if (asssistant.error) {
		throw new Error(asssistant.error.message)
	}
	return asssistant
}

export const AsssistantUpdate = async (params: Partial<Assistant>) => {
	const response = await window.fetch(`${process.env.FETCH_BASE_URL}/v1/assistants/` + params.id, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
		body: JSON.stringify(
			{
				instructions: params.instructions
			}
		)
	})
	const asssistant = await response.json()
	if (asssistant.error) {
		throw new Error(asssistant.error.message)
	}
	return asssistant
}



let fitstTimer: number = 0

let list: listResult = { data: [] }

export const AsssistantListGet = async (): Promise<listResult['data']> => {

	const currentTimer = Date.now()

	if (fitstTimer && ((currentTimer - fitstTimer) < (1000 * 60)) && list.data.length) {
		fitstTimer = currentTimer
		return list.data
	}

	fitstTimer = currentTimer

	const response = await fetch('https://run.dingjunjie.com/v1/assistants', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
	})
	list = await response.json()

	return list.data
}


export const AsssistantDelete = async (id: Assistant['id']): Promise<DeleteResult> => {
	const response = await fetch('https://run.dingjunjie.com/v1/assistants/' + id, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
	})
	return await response.json()
}
