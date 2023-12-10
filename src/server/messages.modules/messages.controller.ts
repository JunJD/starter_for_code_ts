import { Message, ResultMessage, Thread } from '../types'
import * as service from './messages.service'

export const messageCreate =  async (params: Message, threadId: Thread['id']): Promise<ResultMessage> => {
	if(!params.metadata?.title) {
		throw new Error('请输入标题')
	}
	const message = await service.messageCreate(params, threadId)
	return message
}