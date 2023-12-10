import { Assistant, CreateResult, GPTName, RunStatus, Thread, Run, Tool } from '../types'
import * as service from './run.service'

export interface CreateRunResult extends CreateResult {
    assistant_id: Assistant['id'],
    thread_id: Thread['id'],
    status: RunStatus,
    model: GPTName,
    instructions: Assistant['instructions'],
    tools: Array<{type: Tool}>,
    file_ids: string[],
}

export const runCreate =  async (params: Run, threadId: Thread['id']): Promise<CreateRunResult|null> => {
	const run = await service.runCreate(params, threadId)
	return run
}

export const runRetrieve =  async (runId: CreateRunResult['id'], threadId: Thread['id']): Promise<CreateRunResult> => {
	const run = await service.runRetrieve(runId, threadId)
	return run
}