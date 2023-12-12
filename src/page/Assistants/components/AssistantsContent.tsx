import { useState, FC } from 'react'
import Box from '@mui/joy/Box'
import Chip from '@mui/joy/Chip'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import Snackbar from '@mui/joy/Snackbar'
import Divider from '@mui/joy/Divider'
import Avatar from '@mui/joy/Avatar'
import Tooltip from '@mui/joy/Tooltip'

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Context } from '@/common/types/assistant'
import { threadsDelete } from '@/server/threads.modules/threads.service'
import { threadListState } from '@/RecoilAtomStore/atom/gpt/threadList'
import { useRecoilState, useRecoilCallback } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { contextListState } from '@/RecoilAtomStore/Selector/gpt/contextList'
type ChatContentProps = {
	assistantInfo: Context | null
}

const ChatContent: FC<ChatContentProps> = ({ assistantInfo = {} as Context }) => {
	if (!assistantInfo) return (
		<div>null</div>
	)
	const [open, setOpen] = useState([false, false, false])
	const [, setThreadList] = useRecoilState(threadListState)
	const navigate = useNavigate()
	const contextListCallback = useRecoilCallback(({snapshot}) => async () => {
		const UpdatedList = await snapshot.getPromise(contextListState)
		if(Array.isArray(UpdatedList) && UpdatedList.length) {
			navigate('/assistant/' + UpdatedList[UpdatedList.length - 1]?.key)
		} else {
			navigate('/assistant')
		}
	})

	const handleDelete = () => {
		setThreadList(prev => {
			return prev.filter(it => it.id !== assistantInfo.key)
		})
		contextListCallback()
		handleSnackbarClose(2)
	}

	const handleSnackbarOpen = (index: number) => {
		const updatedOpen = [...open]
		updatedOpen[index] = true
		setOpen(updatedOpen)
	}

	const handleSnackbarClose = (index: number) => {
		if (index === 2) {
			console.log('delete')
			threadsDelete(assistantInfo.key)
		}
		const updatedOpen = [...open]
		updatedOpen[index] = false
		setOpen(updatedOpen)
	}

	return (
		<Sheet
			variant="outlined"
			sx={{
				minHeight: 500,
				borderRadius: 'sm',
				p: 2,
				mb: 3,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexWrap: 'wrap',
					gap: 2,
				}}
			>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Avatar>
						{assistantInfo?.title?.slice(0, 1)}
					</Avatar>
					<Box sx={{ ml: 2 }}>
						<Typography level="title-sm" textColor="text.primary" mb={0.5}>
							{assistantInfo?.name}
						</Typography>
						<Typography level="body-xs" textColor="text.tertiary">
							{assistantInfo?.date}
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{ display: 'flex', height: '32px', flexDirection: 'row', gap: 1.5 }}
				>
					<Button
						size="sm"
						variant="plain"
						color="neutral"
						startDecorator={<ReplyRoundedIcon />}
						onClick={() => handleSnackbarOpen(0)}
					>
						{assistantInfo?.status === 'faild' ? '重试' : assistantInfo?.status === 'success' ? '分享导出' : '暂停'}
					</Button>
					<Snackbar
						color="success"
						open={open[0]}
						onClose={() => handleSnackbarClose(0)}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						startDecorator={<CheckCircleRoundedIcon />}
						endDecorator={
							<Button
								onClick={() => handleSnackbarClose(0)}
								size="sm"
								variant="soft"
								color="neutral"
							>
								撤回
							</Button>
						}
					>
						xx成功.
					</Snackbar>
					<Button
						size="sm"
						variant="plain"
						color="neutral"
						startDecorator={<ForwardToInboxRoundedIcon />}
						onClick={() => handleSnackbarOpen(1)}
					>
						转发消息
					</Button>
					<Snackbar
						color="success"
						open={open[1]}
						onClose={() => handleSnackbarClose(1)}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						startDecorator={<CheckCircleRoundedIcon />}
						endDecorator={
							<Button
								onClick={() => handleSnackbarClose(1)}
								size="sm"
								variant="soft"
								color="neutral"
							>
								撤回
							</Button>
						}
					>
						Your message has been forwarded.
					</Snackbar>
					<Button
						size="sm"
						variant="plain"
						color="danger"
						startDecorator={<DeleteRoundedIcon />}
						onClick={() => handleSnackbarOpen(2)}
					>
						删除聊天
					</Button>
					<Snackbar
						color="danger"
						open={open[2]}
						onClose={() => handleDelete()}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						startDecorator={<CheckCircleRoundedIcon />}
						endDecorator={
							<Button
								onClick={() => handleSnackbarClose(2)}
								size="sm"
								variant="soft"
								color="neutral"
							>
								撤回
							</Button>
						}
					>
						xx已被删除.
					</Snackbar>
				</Box>
			</Box>
			<Divider sx={{ mt: 2 }} />
			<Box
				sx={{ py: 2, display: 'flex', flexDirection: 'column', alignItems: 'start' }}
			>
				<Typography
					level="title-lg"
					textColor="text.primary"
					endDecorator={
						<Chip component="span" size="sm" variant="outlined" color="warning">
							{assistantInfo?.tag || '-'}
						</Chip>
					}
				>
					{assistantInfo ? assistantInfo.title : '-'}
				</Typography>
				<Box
					sx={{
						mt: 1,
						display: 'flex',
						alignItems: 'center',
						gap: 1,
						flexWrap: 'wrap',
					}}
				>
					<Box>
						<Typography
							component="span"
							level="body-sm"
							sx={{ mr: 1, display: 'inline-block' }}
						>
							From
						</Typography>
						<Tooltip size="sm" title="Copy AIModelName" variant="outlined">
							<Chip size="sm" variant="soft" color="primary" onClick={() => { }}>
								{assistantInfo?.mode?.name}
							</Chip>
						</Tooltip>
					</Box>
				</Box>
			</Box>
			<Divider />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column-reverse',
				}}>
				{
					assistantInfo.body.map((item, index) => {
						return (
							<Box
								key={index}
							>
								<Typography level="body-sm" mt={2} mb={2}>
									{item ? item[0] : '-'}
								</Typography>
								<Typography level="body-sm" mt={2} mb={2}>
									{item ? item[1] : '-'}
								</Typography>
							</Box>
						)
					})
				}
			</Box>

		</Sheet>
	)
}

export default ChatContent