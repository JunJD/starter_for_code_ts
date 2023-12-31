import Card, { CardProps } from '@mui/joy/Card'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import AspectRatio from '@mui/joy/AspectRatio'
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded'
import { CardContent } from '@mui/joy'
import FileUploader from '@/components/FileUploader'
import { ChangeEvent } from 'react'

export default function DropZone(props: CardProps & { icon?: React.ReactElement,  
	onChange?: (e: ChangeEvent<HTMLInputElement>) => Promise<void> }) {
	const { icon, sx, onChange, ...other } = props
	
	const FileUploaderChange = async (e: ChangeEvent<HTMLInputElement>) => {
		onChange && await onChange(e)
	}
	
	return (
		<Card
			variant="soft"
			{...other}
			sx={[
				{
					borderRadius: 'sm',
					display: 'flex',
					flexDirection: 'column',
					gap: 1,
					alignItems: 'center',
					px: 3,
					flexGrow: 1,
					boxShadow: 'none',
				},
				...(Array.isArray(sx) ? sx : [sx]),
			]}
		>
			<CardContent>
				<FileUploader
					displayTriat={
						<AspectRatio
							ratio="1"
							variant="solid"
							color="primary"
							sx={{
								minWidth: 32,
								borderRadius: '50%',
								'--Icon-fontSize': '16px',
							}}
						>
							<div>{icon ?? <FileUploadRoundedIcon />}</div>
						</AspectRatio>
					}
					onChange={FileUploaderChange}
				/>
			</CardContent>
			
			<Typography level="body-sm" textAlign="center">
				<FileUploader
					displayTriat={
						<Link component="button" overlay>
						Click to upload
						</Link>
					}
					onChange={FileUploaderChange}
				/>

        or drag and drop
				<br /> 支持的文件类型: zip, tar, jpg, gif, png, jpg, html...
			</Typography>
		</Card>
	)
}
