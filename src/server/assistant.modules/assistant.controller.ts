import { Assistant } from '../types'
import * as service from './assistant.service'

export const AsssistantCreate =  async (params: Partial<Assistant>) => {
	if(!params.name) {
		throw new Error('请输入name')
	}
	const assistant = await service.AsssistantCreate(params)
	return assistant
}
export const AsssistantUpdate =  async (params: Partial<Assistant>) => {
	const assistant = await service.AsssistantUpdate(params)
	return assistant
}
export const AsssistantDelete =  async (id: Assistant['id']) => {
	const deleteResult = await service.AsssistantDelete(id)
	return deleteResult
}