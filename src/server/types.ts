
type GPTName = 'gpt-3.5-turbo' | 'gpt-4'

type Purpose = 'assistants' | 'fine-tune'
type FileObject = 'file'
type Status = 'processed'

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