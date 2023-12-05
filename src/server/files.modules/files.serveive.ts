import { FileType } from '../types'

export const FilesCreate =  async (fromData: FormData) => {
	const response = await window.fetch('https://run.dingjunjie.com/v1/files', {
		method: 'POST',
		headers: {
			// 'Content-Type': 'multipart/form-data',
			authorization: 'Bearer ' + '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',
			'OpenAI-Beta': 'assistants=v1'
		},
		body: fromData
	})
	const file = await response.json()
	console.log(file)
	if(file.error) {
		throw new Error(file.error.message)
	}
	return file
}

export const FilesGet =  async () => {
	// @ts-ignore
	console.log(process.env, '666')
	const response = await window.fetch('https://run.dingjunjie.com/v1/files', {
		method: 'GET',
		headers: {

			'Content-Type': 'application/json;charset=UTF-8',
			// @ts-ignore
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},

	})
	const files = await response.json()
	
	return files
}

export const FilesDelete =  async (id: FileType['id']) => {

	const response = await window.fetch('https://run.dingjunjie.com/v1/files/'+id, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',

			// @ts-ignore
			authorization: 'Bearer ' + process.env.CHAT_GPT_API,
			'OpenAI-Beta': 'assistants=v1'
		},

	})
	const del = await response.json()
	
	return del
}