import { EditorProps } from '@tiptap/pm/view'

export const TiptapEditorProps: EditorProps = {
	attributes: {
		class: 'editor',
	},
	handleDOMEvents: {
		keydown: (_view, event) => {
			// prevent default event listeners from firing when slash command is active
			if (['ArrowUp', 'ArrowDown', 'Enter'].includes(event.key)) {
				const slashCommand = document.querySelector('#slash-command')
				if (slashCommand) {
					return true
				}
			}
		},
	},
	handleDrop: (view, event, _slice, moved) => {
		if (
			!moved &&
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files[0]
		) {
			event.preventDefault()
			const file = event.dataTransfer.files[0]
			const coordinates = view.posAtCoords({
				left: event.clientX,
				top: event.clientY,
			})
			console.log(file, coordinates)
			return true
		}
		return false
	},
}
