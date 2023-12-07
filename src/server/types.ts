
export type GPTName = 'gpt-3.5-turbo' | 'gpt-4'

type Purpose = 'assistants' | 'fine-tune'
type FileObject = 'file'
type Status = 'processed'

export type Tool = 'code_interpreter' | 'retrieval' | 'function'
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type listResult<T = any> = {
    data: Array<T>
}
export type DeleteResult = {
    id: string,
    object: string,
    deleted: boolean
}
