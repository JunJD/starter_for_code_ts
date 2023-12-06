import { Asssistant } from '../types'
import * as service from './assistant.service'

export const AsssistantCreate =  async (params: Partial<Asssistant>) => {
	if(!params.name) {
		throw new Error('请输入name')
	}
	const assistant = await service.AsssistantCreate(params)
	return assistant
}
export const AsssistantUpdate =  async (params: Partial<Asssistant>) => {
	const assistant = await service.AsssistantUpdate(params)
	return assistant
}