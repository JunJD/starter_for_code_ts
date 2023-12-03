import PageMain from '@/components/PageMain'
import { AspectRatio, Avatar, AvatarGroup, Box, Card, CardContent, CardCover, CardOverflow, Dropdown, IconButton, List, ListDivider, ListItem, ListItemButton, ListItemContent, Menu, MenuButton, MenuItem, Sheet, Typography } from '@mui/joy'
import {EditRounded, FolderRounded, DeleteRounded, MoreVertRounded, ShareRounded, InsertDriveFileRounded} from '@mui/icons-material'
import TableFiles from '../TableFiles'
const FileDisplay = () => {
	return (
		<PageMain>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
					gap: 2,
				}}
			>
				{' '}
				<Sheet
					variant="outlined"
					sx={{
						borderRadius: 'sm',
						gridColumn: '1/-1',
						display: { xs: 'none', md: 'flex' },
					}}
				>
					<TableFiles />
				</Sheet>
				<Sheet
					variant="outlined"
					sx={{
						display: { xs: 'inherit', sm: 'none' },
						borderRadius: 'sm',
						overflow: 'auto',
						backgroundColor: 'background.surface',
						'& > *': {
							'&:nth-child(n):not(:nth-last-child(-n+4))': {
								borderBottom: '1px solid',
								borderColor: 'divider',
							},
						},
					}}
				>
					<List size="sm" aria-labelledby="table-in-list">
						<ListItem>
							<ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
								<ListItemContent sx={{ p: 1 }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<Typography
											level="title-sm"
											startDecorator={<FolderRounded color="primary" />}
											sx={{ alignItems: 'flex-start' }}
										>
                          Travel pictures
										</Typography>
										<AvatarGroup
											size="sm"
											sx={{
												'--AvatarGroup-gap': '-8px',
												'--Avatar-size': '24px',
											}}
										>
											<Avatar
												src="https://i.pravatar.cc/24?img=6"
												srcSet="https://i.pravatar.cc/48?img=6 2x"
											/>
											<Avatar
												src="https://i.pravatar.cc/24?img=7"
												srcSet="https://i.pravatar.cc/48?img=7 2x"
											/>
											<Avatar
												src="https://i.pravatar.cc/24?img=8"
												srcSet="https://i.pravatar.cc/48?img=8 2x"
											/>
											<Avatar
												src="https://i.pravatar.cc/24?img=9"
												srcSet="https://i.pravatar.cc/48?img=9 2x"
											/>
										</AvatarGroup>
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											mt: 2,
										}}
									>
										<Typography level="body-sm">987.5MB</Typography>

										<Typography level="body-sm">21 Oct 2023, 3PM</Typography>
									</Box>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListDivider />
						<ListItem>
							<ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
								<ListItemContent sx={{ p: 1 }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<Typography
											level="title-sm"
											startDecorator={<FolderRounded color="primary" />}
											sx={{ alignItems: 'flex-start' }}
										>
                          Important documents
										</Typography>
										<AvatarGroup
											size="sm"
											sx={{
												'--AvatarGroup-gap': '-8px',
												'--Avatar-size': '24px',
											}}
										>
											<Avatar
												src="https://i.pravatar.cc/24?img=1"
												srcSet="https://i.pravatar.cc/48?img=1 2x"
											/>
											<Avatar
												src="https://i.pravatar.cc/24?img=9"
												srcSet="https://i.pravatar.cc/48?img=9 2x"
											/>
											<Avatar
												src="https://i.pravatar.cc/24?img=2"
												srcSet="https://i.pravatar.cc/48?img=2 2x"
											/>
											<Avatar
												src="https://i.pravatar.cc/24?img=3"
												srcSet="https://i.pravatar.cc/48?img=3 2x"
											/>
											<Avatar>+3</Avatar>
										</AvatarGroup>
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											mt: 2,
										}}
									>
										<Typography level="body-sm">232.3MB</Typography>

										<Typography level="body-sm">26 Sep 2023, 7PM</Typography>
									</Box>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListDivider />
						<ListItem>
							<ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
								<ListItemContent sx={{ p: 1 }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
										}}
									>
										<Typography
											level="title-sm"
											startDecorator={<FolderRounded color="primary" />}
											sx={{ alignItems: 'flex-start' }}
										>
                          Projects
										</Typography>
										<AvatarGroup
											size="sm"
											sx={{
												'--AvatarGroup-gap': '-8px',
												'--Avatar-size': '24px',
											}}
										>
											<Avatar
												src="https://i.pravatar.cc/24?img=4"
												srcSet="https://i.pravatar.cc/48?img=4 2x"
											/>
											<Avatar
												src="https://i.pravatar.cc/24?img=8"
												srcSet="https://i.pravatar.cc/48?img=8 2x"
											/>
											<Avatar
												src="https://i.pravatar.cc/24?img=5"
												srcSet="https://i.pravatar.cc/48?img=5 2x"
											/>
										</AvatarGroup>
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											mt: 2,
										}}
									>
										<Typography level="body-sm">1.6GB</Typography>

										<Typography level="body-sm">12 Aug 2021, 7PM</Typography>
									</Box>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
						<ListDivider />
						<ListItem>
							<ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
								<ListItemContent sx={{ p: 1 }}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											mb: 1,
										}}
									>
										<Typography
											level="title-sm"
											startDecorator={<FolderRounded color="primary" />}
											sx={{ alignItems: 'flex-start' }}
										>
                          Invoices
										</Typography>
										<Avatar
											size="sm"
											src="https://i.pravatar.cc/24?img=2"
											srcSet="https://i.pravatar.cc/48?img=2 2x"
											sx={{ '--Avatar-size': '24px' }}
										/>
									</Box>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											mt: 2,
										}}
									>
										<Typography level="body-sm">123.3KB</Typography>

										<Typography level="body-sm">14 Mar 2021, 7PM</Typography>
									</Box>
								</ListItemContent>
							</ListItemButton>
						</ListItem>
					</List>
				</Sheet>
				<Card variant="outlined" size="sm">
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{ flex: 1 }}>
							<Typography level="title-md">lotr-two-towers.pdf</Typography>
							<Typography level="body-sm">132.2MB</Typography>
						</Box>
						<Dropdown>
							<MenuButton
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
							</MenuButton>
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
								<MenuItem>
									<EditRounded />
                      Rename file
								</MenuItem>
								<MenuItem>
									<ShareRounded />
                      Share file
								</MenuItem>
								<MenuItem sx={{ textColor: 'danger.500' }}>
									<DeleteRounded color='error' />
                      Delete file
								</MenuItem>
							</Menu>
						</Dropdown>
					</Box>
					<CardOverflow
						sx={{
							borderBottom: '1px solid',
							borderTop: '1px solid',
							borderColor: 'neutral.outlinedBorder',
						}}
					>
						<AspectRatio ratio="16/9" color="primary" sx={{ borderRadius: 0 }}>
							<img
								alt=""
								src="https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&q=80&w=3024&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
						</AspectRatio>
					</CardOverflow>
					<Typography level="body-xs">Added 27 Jun 2023</Typography>
				</Card>
				<Card variant="outlined" size="sm">
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{ flex: 1 }}>
							<Typography level="title-md">photos-travel.zip</Typography>
							<Typography level="body-sm">2.4GB</Typography>
						</Box>
						<Dropdown>
							<MenuButton
								variant="plain"
								size="sm"
								sx={{
									maxWidth: '32px',
									maxHeight: '32px',
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
							</MenuButton>
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
								<MenuItem>
									<EditRounded />
                      Rename file
								</MenuItem>
								<MenuItem>
									<ShareRounded />
                      Share file
								</MenuItem>
								<MenuItem sx={{ textColor: 'danger.500' }}>
									<DeleteRounded color='error' />
                      Delete file
								</MenuItem>
							</Menu>
						</Dropdown>
					</Box>
					<CardOverflow
						sx={{
							borderBottom: '1px solid',
							borderTop: '1px solid',
							borderColor: 'neutral.outlinedBorder',
						}}
					>
						<AspectRatio
							ratio="16/9"
							color="primary"
							sx={{ borderRadius: 0, color: 'primary.plainColor' }}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<InsertDriveFileRounded />
							</Box>
						</AspectRatio>
					</CardOverflow>
					<Typography level="body-xs">Added 16 May 2021</Typography>
				</Card>
				<Card
					variant="solid"
					invertedColors
					size="sm"
					sx={{
						border: '1px solid',
						borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
						minHeight: { xs: 250, md: '100%' },
					}}
				>
					<CardContent
						sx={{
							mb: 'auto',
							flexGrow: 0,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Box sx={{ flex: 1 }}>
							<Typography level="title-md">torres-del-paine.png</Typography>
							<Typography level="body-xs" mt={0.5}>
                    Added 5 Apr 2021
							</Typography>
						</Box>
						<Dropdown>
							<MenuButton
								variant="plain"
								size="sm"
								sx={{
									maxWidth: '32px',
									maxHeight: '32px',
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
							</MenuButton>
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
								<MenuItem>
									<EditRounded />
                      Rename file
								</MenuItem>
								<MenuItem>
									<ShareRounded />
                      Share file
								</MenuItem>
								<MenuItem sx={{ textColor: 'danger.500' }}>
									<DeleteRounded color='error' />
                      Delete file
								</MenuItem>
							</Menu>
						</Dropdown>
					</CardContent>
					<CardCover>
						<img
							alt=""
							src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=774"
						/>
					</CardCover>
					<CardCover
						sx={{
							background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.12))',
						}}
					/>
				</Card>
				<Card
					variant="solid"
					size="sm"
					invertedColors
					sx={{
						minHeight: { xs: 250, md: '100%' },
						border: '1px solid',
						borderColor: 'var(--joy-palette-neutral-outlinedBorder)',
					}}
				>
					<CardContent
						sx={{
							mb: 'auto',
							flexGrow: 0,
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Box sx={{ flex: 1 }}>
							<Typography level="title-md">serra-das-araras.png</Typography>
							<Typography level="body-xs" mt={0.5}>
                    Added 2 Mar 2021
							</Typography>
						</Box>
						<Dropdown>
							<MenuButton
								variant="plain"
								size="sm"
								sx={{
									maxWidth: '32px',
									maxHeight: '32px',
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
							</MenuButton>
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
								<MenuItem>
									<EditRounded />
                      Rename file
								</MenuItem>
								<MenuItem>
									<ShareRounded />
                      Share file
								</MenuItem>
								<MenuItem sx={{ textColor: 'danger.500' }}>
									<DeleteRounded color='error' />
                      Delete file
								</MenuItem>
							</Menu>
						</Dropdown>
					</CardContent>
					<CardCover>
						<img
							alt=""
							src="https://images.unsplash.com/photo-1599593752325-ffa41031056e?auto=format&fit=crop&q=80&w=3570&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</CardCover>
					<CardCover
						sx={{
							background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.12))',
						}}
					/>
				</Card>
				<Card variant="outlined" size="sm">
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{ flex: 1 }}>
							<Typography level="title-md">translated-docs.txt</Typography>
							<Typography level="body-sm">12.2KB</Typography>
						</Box>
						<Dropdown>
							<MenuButton
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
							</MenuButton>
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
								<MenuItem>
									<EditRounded />
                      Rename file
								</MenuItem>
								<MenuItem>
									<ShareRounded />
                      Share file
								</MenuItem>
								<MenuItem sx={{ textColor: 'danger.500' }}>
									<DeleteRounded color='error' />
                      Delete file
								</MenuItem>
							</Menu>
						</Dropdown>
					</Box>
					<CardOverflow
						sx={{
							borderBottom: '1px solid',
							borderTop: '1px solid',
							borderColor: 'neutral.outlinedBorder',
						}}
					>
						<AspectRatio ratio="16/9" color="primary" sx={{ borderRadius: 0 }}>
							<img
								alt=""
								src="https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&q=80&w=3024&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
						</AspectRatio>
					</CardOverflow>
					<Typography level="body-xs">Added 25 May 2019</Typography>
				</Card>
				<Card variant="outlined" size="sm">
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box sx={{ flex: 1 }}>
							<Typography level="title-md">final-version-v3.fig</Typography>
							<Typography level="body-sm">1.1GB</Typography>
						</Box>
						<Dropdown>
							<MenuButton
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
							</MenuButton>
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
								<MenuItem>
									<EditRounded />
                      Rename file
								</MenuItem>
								<MenuItem>
									<ShareRounded />
                      Share file
								</MenuItem>
								<MenuItem sx={{ textColor: 'danger.500' }}>
									<DeleteRounded color='error' />
                      Delete file
								</MenuItem>
							</Menu>
						</Dropdown>
					</Box>
					<CardOverflow
						sx={{
							borderBottom: '1px solid',
							borderTop: '1px solid',
							borderColor: 'neutral.outlinedBorder',
						}}
					>
						<AspectRatio
							ratio="16/9"
							color="primary"
							sx={{ borderRadius: 0, color: 'primary.plainColor' }}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<InsertDriveFileRounded />
							</Box>
						</AspectRatio>
					</CardOverflow>
					<Typography level="body-xs">Added 12 May 2019</Typography>
				</Card>
			</Box>
		</PageMain>
	)
}

export default FileDisplay