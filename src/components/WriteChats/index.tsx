import Box from '@mui/joy/Box'
import ModalClose from '@mui/joy/ModalClose'
import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Textarea from '@mui/joy/Textarea'
import Sheet from '@mui/joy/Sheet'
import { Chip, IconButton, Input, Select, Stack, Typography, Option } from '@mui/joy'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
import FormatColorTextRoundedIcon from '@mui/icons-material/FormatColorTextRounded'
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded'
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded'
import { FormEventHandler, forwardRef, useEffect, useRef } from 'react'

interface WriteChatsProps {
  open?: boolean;
  onClose?: () => void;
  onSend?: (form: {[k: string]: FormDataEntryValue}) => void;
}

const WriteChats = forwardRef<HTMLDivElement, WriteChatsProps>(
	function WriteChats({ open, onClose, onSend }, ref) {
		const TextareaRef = useRef(null)
		useEffect(()=>{
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			open && console.dir((TextareaRef.current as any).childNodes[0].focus())
		}, [open])

		const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
			e.stopPropagation()
			e.preventDefault()
			const formData = new FormData(e.currentTarget)
			const formJson = Object.fromEntries((formData).entries())
			console.log('formJson==>', formJson)
			if(onSend) {
				await onSend(formJson)
				onClose && onClose()
			} else {
				onClose && onClose()
			}
		}
		
		return (
			<Sheet
				ref={ref}
				sx={{
					alignItems: 'center',
					px: 1.5,
					py: 1.5,
					ml: 'auto',
					width: { xs: '100dvw', md: 600 },
					flexGrow: 1,
					border: '1px solid',
					borderRadius: '8px 8px 0 0',
					backgroundColor: 'background.level1',
					borderColor: 'neutral.outlinedBorder',
					boxShadow: 'lg',
					zIndex: 1000,
					position: 'fixed',
					bottom: 0,
					right: 24,
					transform: open ? 'translateY(0)' : 'translateY(100%)',
					transition: 'transform 0.3s ease',
				}}
			>
				<Box sx={{ mb: 2 }}>
					<Typography level="title-sm">新消息</Typography>
					<ModalClose id="close-icon" onClick={onClose} />
				</Box>
				<Box
					sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}
				>
					<form onSubmit={handleSubmit}>
						<FormControl>
							<FormLabel>Assistant</FormLabel>
							<Select
								name='assistant'
								placeholder="请选择 助理" 
								aria-label="Assistant"
								startDecorator={<PeopleRoundedIcon />}
								endDecorator={
									<Chip size="sm" color="danger" variant="soft">
      10+
									</Chip>
								}
							>
								<Option value="dog">Dog</Option>
								<Option value="cat">Cat</Option>
								<Option value="fish">Fish</Option>
								<Option value="bird">Bird</Option>
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel>Priority</FormLabel>
							<Select
								placeholder="请选择 优先级" 
								aria-label="Priority"
								startDecorator={<PeopleRoundedIcon />}
							>
								<Option value="dog">Dog</Option>
								<Option value="cat">Cat</Option>
								<Option value="fish">Fish</Option>
								<Option value="bird">Bird</Option>
							</Select>
						</FormControl>
						<Input name='title' placeholder="请输入标题" aria-label="Message" />
						<FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
							<Textarea
								name='userFirstMessage'
								placeholder="Type your message here…"
								aria-label="Message"
								ref={TextareaRef}
								minRows={8}
								endDecorator={
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
										flexGrow={1}
										sx={{
											py: 1,
											pr: 1,
											borderTop: '1px solid',
											borderColor: 'divider',
										}}
									>
										<div>
											<IconButton size="sm" variant="plain" color="neutral">
												<FormatColorTextRoundedIcon />
											</IconButton>
											<IconButton size="sm" variant="plain" color="neutral">
												<AttachFileRoundedIcon />
											</IconButton>
											<IconButton size="sm" variant="plain" color="neutral">
												<InsertPhotoRoundedIcon />
											</IconButton>
											<IconButton size="sm" variant="plain" color="neutral">
												<FormatListBulletedRoundedIcon />
											</IconButton>
										</div>
										<Button
											color="primary"
											sx={{ borderRadius: 'sm' }}
											type='submit'
										>
                    Send
										</Button>
									</Stack>
								}
								sx={{
									'& textarea:first-of-type': {
										minHeight: 72,
									},
								}}
							/>
						</FormControl>
					</form>
				</Box>
			</Sheet>
		)
	},
)

export default WriteChats
