
import { styled } from '@mui/joy'
import { ChangeEvent, FC, ReactElement, cloneElement, useMemo } from 'react'

const VisuallyHiddenInput = styled('input')`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	bottom: 0;
	left: 0;
	white-space: nowrap;
	width: 1px;
`

interface FileUploaderProps {
	displayTriat: ReactElement,
	onChange?: (e: ChangeEvent) => void
}


const FileUploader: FC<FileUploaderProps> = ({ displayTriat, onChange }) => {

	const handleFile = (e:  ChangeEvent) => {
		onChange && onChange(e)
	}
	
	const RenderDisplayEle = useMemo(() => {
		const {children, component,...reset} = displayTriat.props

		if(component !== 'label') {
			reset.component = 'label'
		}
		reset.sx = {
			...reset.sx,
			cursor: 'pointer'
		}
		const newChidren = Array.isArray(children)
			? [...children, <VisuallyHiddenInput key="002" type="file" onChange={handleFile} />]
			: [children, <VisuallyHiddenInput key="002" type="file"  onChange={handleFile} />]
		return cloneElement(displayTriat, reset, newChidren)
	}, [])


	return (
		<>
			{RenderDisplayEle}
		</>
	)
}

export default FileUploader