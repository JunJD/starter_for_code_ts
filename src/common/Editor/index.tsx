
import { useEditor, EditorContent } from '@tiptap/react'

import { TiptapEditorProps } from './props'
import { TiptapExtensions } from './extensions'
import './index.less'
import ScrollWrap from '@/components/ScrollWrap'
const Editor = () => {
	const content = '<p>Hello World!</p>'
	const editor = useEditor({
		extensions: TiptapExtensions,
		editorProps: TiptapEditorProps,
		content,
		autofocus: 'end',
	})
	return (
		<div 
			className='wrapper'
			onClick={() => {
				editor?.chain().focus().run()
			}}>
			<ScrollWrap>
				{editor && <EditorContent editor={editor} />}
			</ScrollWrap>
			<div className='submit-button'>提交@</div>
		</div>
	)
}

export default Editor