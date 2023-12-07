import { Operate } from '@/common/types/com'
import { MoreVertRounded } from '@mui/icons-material'
import { Dropdown, IconButton, Menu, MenuButton, MenuItem } from '@mui/joy'
import { SxProps, TextColor } from '@mui/joy/styles/types'
import { FC, ReactElement, cloneElement } from 'react'

type renderListItemKey = Operate

export interface DropdownRenderProps {
    renderList: Array<{
        command: renderListItemKey,
        icon: ReactElement,
        label: string,
        color?: TextColor,
        style?: SxProps
    }>,
    onCommond?: (command: renderListItemKey) => void,
    renderDisplay?: ReactElement
}

const DropdownRender: FC<DropdownRenderProps> = ({
	renderList,
	onCommond,
	renderDisplay
}) => {

	const handleSelected = (command: renderListItemKey) => {
		onCommond && onCommond(command)
	}

	return (
		<Dropdown>
			{renderDisplay ?? <MenuButton
				variant="plain"
				size="sm"
				sx={{
					maxWidth: '32px',
					maxHeight: '32px',
					borderRadius: '9999999px',
				}}
			>
				<IconButton
					component="span"
					variant="plain"
					color="neutral"
					size="sm"
				>
					<MoreVertRounded />
				</IconButton>
			</MenuButton>}
			<Menu
				placement="bottom-end"
				size="sm"
				sx={{
					zIndex: '99999',
					p: 1,
					gap: 1,
					'--ListItem-radius': 'var(--joy-radius-sm)',
				}}
			>
				{
					renderList.map((item)=>(
						<MenuItem key={item.command} onClick={()=>{handleSelected(item.command)}} sx={{color: item.color, ...item.style}}>
							{cloneElement(item.icon, { color: item.color })}
							{item.label}
						</MenuItem>
					))
				}
			</Menu>
		</Dropdown>
	)
}

export default DropdownRender