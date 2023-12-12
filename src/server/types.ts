
export interface Model {
    id: GPTName,
    owned_by: string
}

export interface Thread2 {
	id: string,
	createdAt: string,
	title: string,
    msgs: Array<[Role,string]>
    firstMsg: string,
    assistants: Assistant2['id'][]
	messagelist?: ResultMessage[][]
}

export type GPTName = 'gpt-3.5-turbo' | 'gpt-3.5-turbo-1106' |'gpt-4'

export type Role = 'user' | 'assistant'

export interface Metadata<T> {
    [key: string]: T
}

type Purpose = 'assistants' | 'fine-tune'
type FileObject = 'file'
type Status = 'processed'
export type RunStatus =
    | 'queued'/* 当第一次创建run或完成required_action时。*/
    | 'in_progress'  /* 在in_progress期间，助手使用模型和工具执行步骤。*/
    | 'requires_action' /* 当使用函数调用工具时，一旦模型确定了要调用的函数的名称和参数，Run将移动到required_action状态。 */
    | 'cancelling' /*您可以尝试使用cancel run端点取消in_progress运行。*/
    | 'cancelled' /* 成功取消运行。*/
    | 'failed' /* 您可以通过查看Run中的last_error对象来查看失败的原因。*/
    | 'completed' /* Run成功完成!*/
    | 'expired' /* 当调用函数的输出没有在expires_at之前提交并且运行过期时，*/

export type Tool = 'code_interpreter' | 'retrieval' | 'function'

export type ApiObjectType = 'thread' | 'assistant'

export interface GPTMode {
    provider: string,
    name: GPTName,
    completionParams: {
        maxTokens: number,
        temperature: number,
        topP: number,
        presencePenalty: number,
        frequencyPenalty: number
    }
}

export interface FileType {
    object: FileObject,
    id: string,
    purpose: Purpose,
    filename: string,
    bytes: number,
    createdAt: number,
    status: Status,
    statusDetails: null
}

export interface CompanyData {
    role: string,
    name: string,
    logo: string,
    years: string,
}

export interface Assistant {
    id: string,
    name: string,
    instructions: string,
    fileIds: Array<FileType['id']>
    tools: Array<{ type: Tool }>,
    model: GPTName,
    description: string,
    companyData: Array<CompanyData>,
    skills: Array<Tool>
}

export interface Assistant2<T = string> {
    id: string,
    object: ApiObjectType,
    name: string,
    instructions: string,
    file_ids: Array<FileType['id']>
    tools: Array<{ type: Tool }>,
    model: GPTName,
    description: string,
    metadata: Metadata<T>
}

export interface BaseMessage<R = Role, C = string> {
    id?: string,
    role: R,
    content: C,
    fileIds?: Array<string>,
    metadata?: Metadata<string>
}

export type Message = BaseMessage<Extract<Role, 'user'>, string>

type MessageContent = Array<Text>

// interface ImageFile {
//     type: 'image_file';
//     image_file: {
//         file_id: string;
//     };
// }

interface Text {
    type: 'text';
    text: {
        value: string;
        annotations?: unknown[]; // 这里的类型可以根据实际情况进行调整
    };
}

export interface ResultMessage<R = Role,T = MessageContent> extends BaseMessage< R,T> {
    assistant_id: Assistant2['id'],
    thread_id: Thread['id']
    run_id: string
}

export interface Thread<T = string> {
    id: string,
    object: ApiObjectType,
    metadata: Metadata<T>,
    messages?: Array<Message>
}

export interface Run<T = string> {
    assistantId: Assistant['id'], //Required
    model?: GPTName, //覆盖？
    instructions?: Assistant['instructions'] //覆盖？
    tools?: Array<{ type: Tool }>,
    metadata?: Metadata<T>
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type listResult<T = any> = {
    data: Array<T>
}
export type DeleteResult = {
    id: string,
    object: string,
    deleted: boolean
}

export type CreateResult = {
    id: string,
    object: ApiObjectType,
    created_at: string,
    metadata: Metadata<string>
}