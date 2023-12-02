
import { useEditor, EditorContent } from '@tiptap/react'

import { TiptapEditorProps } from './props'
import { TiptapExtensions } from './extensions'
import './index.less'
const Editor = () => {
	const content = '<p>Hello World!</p>'
	const editor = useEditor({
		extensions: TiptapExtensions,
		editorProps: TiptapEditorProps,
		content,
		autofocus: 'end',
	})
	return (
		<div onClick={() => {
			editor?.chain().focus().run()
		}}>
			{editor && <EditorContent editor={editor} />}
		</div>
	)
}

export default Editor