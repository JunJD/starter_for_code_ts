import { ChangeEvent, FormEventHandler, ReactElement, useEffect, useState } from 'react'

import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Divider from '@mui/joy/Divider'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import Input from '@mui/joy/Input'
import IconButton from '@mui/joy/IconButton'
import Textarea from '@mui/joy/Textarea'
import Stack from '@mui/joy/Stack'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import CardActions from '@mui/joy/CardActions'
import CardOverflow from '@mui/joy/CardOverflow'

import { Extension, HtmlOutlined } from '@mui/icons-material'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import EditorToolbar from '../EditorToolbar'
import DropZone from '../DropZone'
import FileUpload from '../FileUpload'
import ModelSelector from '../ModelSelector'
import { useNavigate } from 'react-router-dom'

import { FilesGet, FilesCreate, FilesDelete } from '@/server/files.modules/files.controller'
import { AsssistantCreate, AsssistantUpdate } from '@/server/assistant.modules/assistant.controller'

import { Assistant, Assistant2, FileType, GPTName, Tool } from '@/server/types'
import { Theme } from '@mui/joy'
import useMediaQuery from '@/common/hooks/useMediaQuery'
import { assistantListState } from '@/RecoilAtomStore/atom/gpt/asssistantList'
import { useRecoilState } from 'recoil'

interface DisplayFileType extends FileType {
	icon: ReactElement,
	fileName: string,
	fileSize: string,
	progress: number
}

export default function AssistansProfile() {

	const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'))
	const navigate = useNavigate()
	const [fileList, setFileList] = useState<DisplayFileType[]>([])
	const [assistant, saveAssistant] = useState<Assistant>({} as Assistant )
	const [assistants2, setAssistants2] = useRecoilState<Assistant2[]>(assistantListState)
	const GoBack = () => {
		navigate(-1)
	}

	useEffect(() => {
		getFileList()
	}, [])
	

	const getFileList = async() => {
		const initFileData = await FilesGet()
		const initFileList: DisplayFileType[] =  initFileData?.data?.map((filedata: FileType)=>{
			return {
				...filedata,
				icon: <HtmlOutlined/>,
				fileName: filedata.filename,
				fileSize: (filedata.bytes / 1024 /1024) + 'mb',
				progress: filedata.status === 'processed'? 50: 100
			}
		})
		setFileList(initFileList)
	}

	const CreateFileForAssistant = async (e: ChangeEvent<HTMLInputElement>) => {
		try {
			const files = (e.target as HTMLInputElement).files

			const fromData = new FormData()
			fromData.append('file', files![0])
			fromData.append('purpose', 'assistants')
			const filedata: FileType = await FilesCreate(fromData)


			setFileList((prev) => [...prev, { 
				...filedata,
				icon: <HtmlOutlined/>,
				fileName: filedata.filename,
				fileSize: (filedata.bytes / 1000000) + 'mb',
				progress: filedata.status === 'processed'? 50: 100
			}])
		} catch (error) {
			console.log(error)
		}
	}

	const handleDeleteFile = async (id: FileType['id']) => {
		await FilesDelete(id)
		getFileList()
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.stopPropagation()
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const formJson = Object.fromEntries((formData).entries())

		const assistantInfo = await AsssistantCreate({
			name: formJson.name as string,
			tools: [{ type: formJson.tool }] as Array< { type:Tool  } >,
			model: formJson.model as GPTName,
			description: formJson.description  as string,
		})
		saveAssistant(assistantInfo)
		console.log('fetch')
		setAssistants2((prev)=>{
			return prev.concat(assistantInfo)
		})
		console.log('fetchend')
	}

	useEffect(()=>{
		console.log('assistants2==>' , assistants2)
	}, [assistants2])

	
	const handleUpdateInstructions: FormEventHandler<HTMLFormElement> = async(e) => {
		if(!assistant) {
			alert('先创建一个助手')
			return 
		}
		e.stopPropagation()
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const formJson = Object.fromEntries((formData).entries())
		console.log(formJson, 'formJson')
		const assistantInfo = await AsssistantUpdate({
			id: assistant.id,
			instructions: formJson.instructions  as string,
		})

		setAssistants2((prev)=>{
			return prev.map((item)=>{
				if(item.id === assistantInfo.id) {
					return assistantInfo
				}
				return item
			})
		})
	}
	
	return (
		<Box sx={{ flex: 1, width: '100%' }}>
			<Box
				sx={{
					position: 'sticky',
					top: { sm: -100, md: -110 },
					bgcolor: 'background.body',
					zIndex: 9995,
				}}
			>
			</Box>
			<Stack
				spacing={4}
				sx={{
					display: 'flex',
					maxWidth: '800px',
					mx: 'auto',
					px: { xs: 2, md: 6 },
					py: { xs: 2, md: 3 },
				}}
			>
				{/* 基础 */}
				<form onSubmit={handleSubmit}>
					<Card>
						<Box sx={{ mb: 1 }}>
							<Typography level="title-md">AI助理信息</Typography>
							<Typography level="body-sm">
							为您的助手配置基本信息.
							</Typography>
						</Box>
						<Divider />
						{/* 布局1 */}
						{!hidden && <Stack
							direction="row"
							spacing={3}
							sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
						>
							<Stack direction="column" spacing={1}>
								<AspectRatio
									ratio="1"
									maxHeight={200}
									sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
								>
									<img
										src="/images/user.png"
										loading="lazy"
										alt=""
									/>
								</AspectRatio>
								<IconButton
									aria-label="upload new picture"
									size="sm"
									variant="outlined"
									color="neutral"
									sx={{
										bgcolor: 'background.body',
										position: 'absolute',
										zIndex: 2,
										borderRadius: '50%',
										left: 100,
										top: 170,
										boxShadow: 'sm',
									}}
								>
									<EditRoundedIcon />
								</IconButton>
							</Stack>
							<Stack spacing={2} sx={{ flexGrow: 1 }}>
								<Stack spacing={1}>
									<FormLabel>助手名称</FormLabel>
									<FormControl
										sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
									>
										<Input name='name' size="sm" placeholder="请给你的AI助理起个名称" />
									</FormControl>
									<FormControl
										sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
									>
										<Input name='sk' size="sm" placeholder="请填写AI助理的OpenAI Key" sx={{ flexGrow: 1 }} />
									</FormControl>
								</Stack>
								<Stack direction="row" spacing={2}>
									<FormControl>
										<FormLabel>Tag</FormLabel>
										<Input name='tag' size="sm" defaultValue="Learn" />
									</FormControl>
									<FormControl sx={{ flexGrow: 1 }}>
										<FormLabel>Tool</FormLabel>
										<Select
											size="sm"
											startDecorator={<Extension />}
											defaultValue="retrieval"
											name='tool'
											sx={{ flexGrow: 1 }}
										>
											<Option value="code_interpreter">
											代码解释器{' '}
												<Typography textColor="text.tertiary" ml={0.5}>
												— code_interpreter
												</Typography>
											</Option>
											<Option value="retrieval">
											知识文档检索{' '}
												<Typography textColor="text.tertiary" ml={0.5}>
												— retrieval
												</Typography>
											</Option>
											<Option value="function">
											自定义插件{' '}
												<Typography textColor="text.tertiary" ml={0.5}>
												— function
												</Typography>
											</Option>
										</Select>
									</FormControl>
								</Stack>
								<div>
									<ModelSelector />
								</div>
								<div>
									<FormControl sx={{ display: { sm: 'contents' } }}>
										<FormLabel>Description</FormLabel>
										<Input name='description' size="sm" placeholder="描述一下你的助手吧" sx={{ flexGrow: 1 }} />
									</FormControl>
								</div>
							</Stack>
						</Stack>}
						{/* 布局2 */}
						{hidden && <Stack
							direction="column"
							spacing={2}
							sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
						>
							<Stack direction="row" spacing={2}>
								<Stack direction="column" spacing={1}>
									<AspectRatio
										ratio="1"
										maxHeight={108}
										sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
									>
										<img
											src="/images/user.png"
											loading="lazy"
											alt=""
										/>
									</AspectRatio>
									<IconButton
										aria-label="upload new picture"
										size="sm"
										variant="outlined"
										color="neutral"
										sx={{
											bgcolor: 'background.body',
											position: 'absolute',
											zIndex: 2,
											borderRadius: '50%',
											left: 85,
											top: 180,
											boxShadow: 'sm',
										}}
									>
										<EditRoundedIcon />
									</IconButton>
								</Stack>
								<Stack spacing={1} sx={{ flexGrow: 1 }}>
									<FormLabel>Name</FormLabel>
									<FormControl
										sx={{
											display: {
												sm: 'flex-column',
												md: 'flex-row',
											},
											gap: 2,
										}}
									>
										<Input name='name' size="sm" placeholder="请给你的AI助理起个名称" />
									</FormControl>
									<FormControl
										sx={{
											display: {
												sm: 'flex-column',
												md: 'flex-row',
											},
											gap: 2,
										}}
									>
										<Input name='sk' size="sm" placeholder="请填写AI助理的OpenAI Key" sx={{ flexGrow: 1 }} />
									</FormControl>
								</Stack>
							</Stack>
							<FormControl>
								<FormLabel>Tag</FormLabel>
								<Input size="sm" defaultValue="UI Developer" />
							</FormControl>
							<FormControl sx={{ flexGrow: 1 }}>
								<FormLabel>Tool</FormLabel>
								<Select
									name='tool'
									size="sm"
									startDecorator={<Extension />}
									defaultValue="retrieval"
								>
									<Option value="code_interpreter">
									代码解释器{' '}
										<Typography textColor="text.tertiary" ml={0.5}>
										— code_interpreter
										</Typography>
									</Option>
									<Option value="retrieval">
									知识文档检索{' '}
										<Typography textColor="text.tertiary" ml={0.5}>
										— retrieval
										</Typography>
									</Option>
									<Option value="function">
									自定义插件{' '}
										<Typography textColor="text.tertiary" ml={0.5}>
										— function
										</Typography>
									</Option>
								</Select>
							</FormControl>
							<div>
								<ModelSelector />
							</div>
							<div>
								<FormControl sx={{ display: { sm: 'contents' } }}>
									<FormLabel>Description</FormLabel>
									<Input name='description' size="sm" placeholder="描述一下你的助手吧" sx={{ flexGrow: 1 }} />
								</FormControl>
							</div>
						</Stack>}
						<CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
							<CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
								<Button size="sm" variant="outlined" color="neutral"  onClick={GoBack}>
								Cancel
								</Button>
								<Button size="sm" variant="solid" type='submit'>
								Save
								</Button>
							</CardActions>
						</CardOverflow>
					</Card>
				</form>
				{/* 高级设置 */}
				<form onSubmit={handleUpdateInstructions}>
					<Card>
						<Box sx={{ mb: 1 }}>
							<Typography level="title-md">指令</Typography>
							<Typography level="body-sm">
							助手使用的系统指令。最大长度为32768个字符。
							</Typography>
						</Box>
						<Divider />
						<Stack spacing={2} sx={{ my: 1 }}>
							<EditorToolbar />
							<Textarea
								name='instructions'
								size="sm"
								minRows={4}
								sx={{ mt: 1.5 }}
								defaultValue="你是一名个人数学导师。当被问及问题时, 编写并运行Python代码来回答问题。"
							/>
							<FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
							32729 characters left
							</FormHelperText>
						</Stack>
						<CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
							<CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
								<Button size="sm" variant="outlined" color="neutral"  onClick={GoBack}>
								Cancel
								</Button>
								<Button size="sm" variant="solid" type='submit'>
								Save
								</Button>
							</CardActions>
						</CardOverflow>
					</Card>
				</form>
				{/* 文件 */}
				<Card>
					<Box sx={{ mb: 1 }}>
						<Typography level="title-md">Files assistant</Typography>
						<Typography level="body-sm">
							上传一些文件以帮助助理学习更多的知识
						</Typography>
					</Box>
					<Divider />
					<Stack spacing={2} sx={{ my: 1 }}>
						<DropZone
							onChange={CreateFileForAssistant}
						/>
						{
							Array.isArray(fileList) &&  fileList.map((file)=>{
								return (
									<FileUpload
										key={file.id}
										icon={file.icon}
										fileName={file.fileName}
										fileSize={file.fileSize}
										progress={file.progress}
										onClickDelete={()=>{handleDeleteFile(file.id)}}
									/>
								)
							})
						}
					</Stack>
					<CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
						<CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
							<Button size="sm" variant="outlined" color="neutral" onClick={GoBack}>
								Cancel
							</Button>
							<Button size="sm" variant="solid">
								Save
							</Button>
						</CardActions>
					</CardOverflow>
				</Card>
			</Stack>
		</Box>
	)
}
