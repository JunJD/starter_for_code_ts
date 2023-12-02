import { FC, useEffect } from 'react'
import { baseComponents } from '@/common/types/com'
import './index.less'
const MainContentWrapper: FC<baseComponents> = ({ children }) => {
	useEffect(() => {
		document.body.addEventListener('scroll', (e) => {
			console.dir(e.target)
			console.dir(e.currentTarget)
		})
	}, [])

	return (
		<div className="layout-content-wrapper">
			{children}
		</div>
	)
}

export default MainContentWrapper
