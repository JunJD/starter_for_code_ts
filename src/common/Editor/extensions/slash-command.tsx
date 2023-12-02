/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	useState,
	useEffect,
	useCallback,
	ReactNode,
	useRef,
	useLayoutEffect,
} from 'react'
import { Editor, Range, Extension } from '@tiptap/core'
import Suggestion from '@tiptap/suggestion'
import { ReactRenderer } from '@tiptap/react'
import tippy from 'tippy.js'
import './index.less'

interface CommandItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface CommandProps {
  editor: Editor;
  range: Range;
}

const Command = Extension.create({
	name: 'slash-command',
	addOptions() {
		return {
			suggestion: {
				char: '/',
				command: ({
					editor,
					range,
					props,
				}: {
          editor: Editor;
          range: Range;
          props: any;
        }) => {
					props.command({ editor, range })
				},
			},
		}
	},
	addProseMirrorPlugins() {
		return [
			Suggestion({
				editor: this.editor,
				...this.options.suggestion,
			}),
		]
	},
})
const getSuggestionItems = ({ query }: { query: string }) => {
	return [
		{
			title: '继续写作',
			description: '使用AI扩展您的思路。',
			searchTerms: ['gpt'],
			// icon: <Magic className="w-7" />,
			command: ({ editor, range }: CommandProps) => {
				console.log(editor, range)
			},
		},
		{
			title: 'ai密钥',
			description: '更换ai密钥',
			// icon: <MessageSquarePlus size={18} />,
			command: ({ editor, range }: CommandProps) => {
				console.log(editor, range)
			},
		}
	].filter((item) => {
		if (typeof query === 'string' && query.length > 0) {
			const search = query.toLowerCase()
			return (
				item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        (item.searchTerms &&
          item.searchTerms.some((term: string) => term.includes(search)))
			)
		}
		return true
	})
}

export const updateScrollView = (container: HTMLElement, item: HTMLElement) => {
	const containerHeight = container.offsetHeight
	const itemHeight = item ? item.offsetHeight : 0

	const top = item.offsetTop
	const bottom = top + itemHeight

	if (top < container.scrollTop) {
		container.scrollTop -= container.scrollTop - top + 5
	} else if (bottom > containerHeight + container.scrollTop) {
		container.scrollTop += bottom - containerHeight - container.scrollTop + 5
	}
}
const CommandList = ({
	items,
	command,
	editor,
	// range,
}: {
  items: CommandItemProps[];
  command: any;
  editor: any;
  range: any;
}) => {
	const [selectedIndex, setSelectedIndex] = useState(0)

	const selectItem = useCallback(
		(index: number) => {
			const item = items[index]

			if (item) {
				command(item)
			}
		},
		[editor, items],
	)

	useEffect(() => {
		const navigationKeys = ['ArrowUp', 'ArrowDown', 'Enter']
		const onKeyDown = (e: KeyboardEvent) => {
			if (navigationKeys.includes(e.key)) {
				e.preventDefault()
				if (e.key === 'ArrowUp') {
					setSelectedIndex((selectedIndex + items.length - 1) % items.length)
					return true
				}
				if (e.key === 'ArrowDown') {
					setSelectedIndex((selectedIndex + 1) % items.length)
					return true
				}
				if (e.key === 'Enter') {
					selectItem(selectedIndex)
					return true
				}
				return false
			}
		}
		document.addEventListener('keydown', onKeyDown)
		return () => {
			document.removeEventListener('keydown', onKeyDown)
		}
	}, [items, selectedIndex, setSelectedIndex, selectItem])

	useEffect(() => {
		setSelectedIndex(0)
	}, [items])

	const commandListContainer = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		const container = commandListContainer?.current

		const item = container?.children[selectedIndex] as HTMLElement

		if (item && container) updateScrollView(container, item)
	}, [selectedIndex])

	return items.length > 0 ? (
		<div
			id="slash-command"
			ref={commandListContainer}
			className="slash-command"
		>
			{items.map((item: CommandItemProps, index: number) => {
				return (
					<button
						className='slash-command-item'
						key={index}
						onClick={() => selectItem(index)}
					>
						<div>
							icon
						</div>
						<div className='item-text'>
							<div className="item-text-title">{item.title}</div>
							<div className="item-text-description">{item.description}</div>
						</div>

					</button>
				)
			})}
		</div>
	) : null
}

const renderItems = () => {
	let component: ReactRenderer | null = null
	let popup: any | null = null

	return {
		onStart: (props: { editor: Editor; clientRect: DOMRect }) => {
			component = new ReactRenderer(CommandList, {
				props,
				editor: props.editor,
			})

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			popup = tippy('body', {
				getReferenceClientRect: props.clientRect as any,
				appendTo: () => document.body,
				content: component.element,
				showOnCreate: true,
				interactive: true,
				trigger: 'manual',
				placement: 'bottom-start',
			})
		},
		onUpdate: (props: { editor: Editor; clientRect: DOMRect }) => {
			component?.updateProps(props)

			popup &&
        popup[0].setProps({ getReferenceClientRect: props.clientRect })
		},
		onKeyDown: (props: { event: KeyboardEvent }) => {
			if (props.event.key === 'Escape') {
				popup?.[0].hide()

				return true
			}

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			return component?.ref?.onKeyDown(props)
		},
		onExit: () => {
			popup?.[0].destroy()
			component?.destroy()
		},
	}
}

const SlashCommand = Command.configure({
	suggestion: {
		items: getSuggestionItems,
		render: renderItems,
	},
})

export default SlashCommand
