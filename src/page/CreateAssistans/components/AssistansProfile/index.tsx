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
import Tabs from '@mui/joy/Tabs'
import TabList from '@mui/joy/TabList'
import Tab, { tabClasses } from '@mui/joy/Tab'
import Breadcrumbs from '@mui/joy/Breadcrumbs'
import Link from '@mui/joy/Link'
import Card from '@mui/joy/Card'
import CardActions from '@mui/joy/CardActions'
import CardOverflow from '@mui/joy/CardOverflow'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import { ChevronRightRounded, Extension, FilePresent, HtmlOutlined } from '@mui/icons-material'
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import EditorToolbar from '../EditorToolbar'
import DropZone from '../DropZone'
import FileUpload from '../FileUpload'
import CountrySelector from '../CountrySelector'
import { useNavigate } from 'react-router-dom'

export default function AssistansProfile() {
	const navigate = useNavigate()
	const GoBack = () => {
		navigate(-1)
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
				<Box sx={{ px: { xs: 2, md: 6 } }}>
					<Breadcrumbs
						size="sm"
						aria-label="breadcrumbs"
						separator={<ChevronRightRounded fontSize='medium' />}
						sx={{ pl: 0 }}
					>
						<Link
							underline="none"
							color="neutral"
							onClick={GoBack}
							aria-label="Home"
						>
							<HomeRoundedIcon />
						</Link>
						<Typography color="primary" fontWeight={500} fontSize={12}>
							Create assistant
						</Typography>
					</Breadcrumbs>
					<Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
						Assistant profile
					</Typography>
				</Box>
				<Tabs
					defaultValue={0}
					sx={{
						bgcolor: 'transparent',
					}}
				>
					<TabList
						tabFlex={1}
						size="sm"
						sx={{
							pl: { xs: 0, md: 4 },
							justifyContent: 'left',
							[`&& .${tabClasses.root}`]: {
								fontWeight: '600',
								flex: 'initial',
								color: 'text.tertiary',
								[`&.${tabClasses.selected}`]: {
									bgcolor: 'transparent',
									color: 'text.primary',
									'&::after': {
										height: '2px',
										bgcolor: 'primary.500',
									},
								},
							},
						}}
					>
						<Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
							Settings
						</Tab>
					</TabList>
				</Tabs>
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
				<Card>
					<Box sx={{ mb: 1 }}>
						<Typography level="title-md">AI助理信息</Typography>
						<Typography level="body-sm">
							为您的助手配置基本信息.
						</Typography>
					</Box>
					<Divider />
					<Stack
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
									<Input size="sm" placeholder="请给你的AI助理起个名称" />
									<Input size="sm" placeholder="请填写AI助理的OpenAI Key" sx={{ flexGrow: 1 }} />
								</FormControl>
							</Stack>
							<Stack direction="row" spacing={2}>
								<FormControl>
									<FormLabel>Tag</FormLabel>
									<Input size="sm" defaultValue="Learn" />
								</FormControl>
								<FormControl sx={{ flexGrow: 1 }}>
									<FormLabel>Tool</FormLabel>
									<Select
										size="sm"
										startDecorator={<Extension />}
										defaultValue="retrieval"
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
								<CountrySelector />
							</div>
							<div>
								<FormControl sx={{ display: { sm: 'contents' } }}>
									<FormLabel>Files</FormLabel>
									<Select
										multiple
										size="sm"
										startDecorator={<FilePresent />}
										defaultValue={['file1']}
										sx={{ flexGrow: 1 }}
									>
										<Option value="file1">
											文件1{' '}
											<Typography textColor="text.tertiary" ml={0.5}>
												— file1
											</Typography>
										</Option>
										<Option value="file2">
											文件2{' '}
											<Typography textColor="text.tertiary" ml={0.5}>
												— file2
											</Typography>
										</Option>
									</Select>
								</FormControl>
							</div>
						</Stack>
					</Stack>
					<Stack
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
										src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
										srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
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
									<Input size="sm" placeholder="Assistant Name" />
									<Input size="sm" placeholder="OpenAI Key" />
								</FormControl>
							</Stack>
						</Stack>
						<FormControl>
							<FormLabel>Role</FormLabel>
							<Input size="sm" defaultValue="UI Developer" />
						</FormControl>
						<FormControl sx={{ flexGrow: 1 }}>
							<FormLabel>Tool</FormLabel>
							<Select
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
							<CountrySelector />
						</div>
						<div>
							<FormControl sx={{ display: { sm: 'contents' } }}>
								<FormLabel>Files</FormLabel>
								<Select
									multiple
									size="sm"
									startDecorator={<FilePresent />}
									defaultValue={['file1']}
									sx={{ flexGrow: 1 }}
								>
									<Option value="file1">
										文件1{' '}
										<Typography textColor="text.tertiary" ml={0.5}>
											— file1
										</Typography>
									</Option>
									<Option value="file2">
										文件2{' '}
										<Typography textColor="text.tertiary" ml={0.5}>
											— file2
										</Typography>
									</Option>
								</Select>
							</FormControl>
						</div>
					</Stack>
					<CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
						<CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
							<Button size="sm" variant="outlined" color="neutral">
								Cancel
							</Button>
							<Button size="sm" variant="solid">
								Save
							</Button>
						</CardActions>
					</CardOverflow>
				</Card>
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
							<Button size="sm" variant="outlined" color="neutral">
								Cancel
							</Button>
							<Button size="sm" variant="solid">
								Save
							</Button>
						</CardActions>
					</CardOverflow>
				</Card>
				<Card>
					<Box sx={{ mb: 1 }}>
						<Typography level="title-md">Files assistant</Typography>
						<Typography level="body-sm">
							上传一些文件以帮助助理学习更多的知识
						</Typography>
					</Box>
					<Divider />
					<Stack spacing={2} sx={{ my: 1 }}>
						<DropZone />
						<FileUpload
							icon={<InsertDriveFileRoundedIcon />}
							fileName="Tech design requirements.zip"
							fileSize="200 kB"
							progress={100}
						/>
						<FileUpload
							icon={<HtmlOutlined />}
							fileName="dash.html"
							fileSize="16 MB"
							progress={40}
						/>
					</Stack>
					<CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
						<CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
							<Button size="sm" variant="outlined" color="neutral">
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
