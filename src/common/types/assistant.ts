
import {AvatarTypeMap} from '@mui/joy/Avatar'
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
    avatar: {
        label: string,
        color: AvatarTypeMap['props']['color']
    },
    date: string,
    title: string,
    summary: string,
    body: string,
    color: string,
}