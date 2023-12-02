import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import SlashCommand from './slash-command'

export const TiptapExtensions = [
	StarterKit,
	Placeholder.configure({
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		placeholder: ({ node }: any) => {
			if (node.type.name === 'heading') {
				return `Heading ${node.attrs.level}`
			}
			if(localStorage.getItem('OPENAI_API_KEY')) {
				return '按下\'/\'键来访问命令，或者你可以使用\'++\'键来使用AI自动补全功能'
			} else {
				return '按下\'/\'键来访问命令，选择‘更换ai密钥’并输入您的openai密钥'
			}
      
		},
		includeChildren: true,
	}),
	SlashCommand,
]
