import { CreateResult, Thread } from '../types'
import * as service from './threads.service'

export const threadsCreate =  async (params: Partial<Thread>): Promise<CreateResult> => {
	if(!params.metadata?.title) {
		throw new Error('请输入标题')
	}
	const assistant = await service.threadsCreate(params)
	return assistant
}