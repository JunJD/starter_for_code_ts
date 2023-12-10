import { listResult } from '../types'


let fitstTimer: number = 0

let list: listResult = {data: []}

export const ModelListGet = async(): Promise<listResult> => {

	const currentTimer = Date.now()

	if(fitstTimer && ((currentTimer - fitstTimer) < (1000 * 60)) && list.data.length) {
		fitstTimer = currentTimer
		return list
	}

	fitstTimer = currentTimer

	const response = await fetch(`${process.env.FETCH_BASE_URL}/v1/models`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' +  process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},
	})
	list = await response.json()

	return list
}
