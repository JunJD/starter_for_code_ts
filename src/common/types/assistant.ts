import { Assistant2, Role } from '@/server/types'

export type TagType = 'learn' | 'work'
export type ModeEnum = 'gpt-3.5-turbo'| 'gpt-4.0'
interface AiMode {
    name: ModeEnum,
} 
export type StatusType = 'run' | 'faild' | 'success'
export interface AssistantType {
    name: string,
    key: string,
    tag: TagType,
    mode: AiMode,
    status: StatusType,
    date: string,
    title: string,
    body: Array<[Role, string]>,
    color: string,
}
export interface Context {
    name: string,
    key: string,
    tag: TagType,
    mode: AiMode,
    status: StatusType,
    date: string,
    title: string,
    summary: string,
    body: Array<[Role, string]>,
    color: string,
    assistant: Assistant2[]
}