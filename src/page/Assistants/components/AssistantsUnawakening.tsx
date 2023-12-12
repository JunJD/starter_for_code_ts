import { useRecoilValue } from 'recoil'
import { Box, Skeleton, Stack, Typography } from '@mui/joy'
import { contextListState } from '@/RecoilAtomStore/Selector/gpt/contextList'
import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AssistantsUnawakening = () => {

	const contextList = useRecoilValue(contextListState)
	const navigate = useNavigate()

	useLayoutEffect(() => {
		if (Array.isArray(contextList) && contextList.length) {
			navigate('/assistant/' + contextList[contextList.length - 1]?.key)
		}
	}, [contextList])


	const [loading, ] = useState(true)

	return (
		<Stack spacing={2} useFlexGap sx={{ maxWidth: '60ch' }}>
			<Box sx={{ m: 'auto' }}>
				<Typography
					sx={{ position: 'relative', overflow: 'hidden' }}
					level="h1"
					fontSize="xl"
				>
					<Skeleton loading={loading}>A heading</Skeleton>
				</Typography>
				<Typography
					level="body-xs"
					sx={{ mt: 1, mb: 2, position: 'relative', overflow: 'hidden' }}
				>
					<Skeleton loading={loading}>HISTORY, PURPOSE AND USAGE</Skeleton>
				</Typography>
				<Typography sx={{ position: 'relative', overflow: 'hidden' }}>
					<Skeleton loading={loading}>
						<i>Lorem ipsum</i> is placeholder text commonly used in the graphic,
						print, and publishing industries for previewing layouts and visual
						mockups.
					</Skeleton>
				</Typography>
			</Box>
			<Box sx={{ m: 'auto' }}>
				<Typography
					sx={{ position: 'relative', overflow: 'hidden' }}
					level="h1"
					fontSize="xl"
				>
					<Skeleton loading={loading}>A heading</Skeleton>
				</Typography>
				<Typography
					level="body-xs"
					sx={{ mt: 1, mb: 2, position: 'relative', overflow: 'hidden' }}
				>
					<Skeleton loading={loading}>HISTORY, PURPOSE AND USAGE</Skeleton>
				</Typography>
				<Typography sx={{ position: 'relative', overflow: 'hidden' }}>
					<Skeleton loading={loading}>
						<i>Lorem ipsum</i> is placeholder text commonly used in the graphic,
						print, and publishing industries for previewing layouts and visual
						mockups.
					</Skeleton>
				</Typography>
			</Box>
		</Stack>
	)
}

export default AssistantsUnawakening