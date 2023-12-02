import { baseComponents } from '@/common/types/com'
import { FC } from 'react'
import './index.less'

const ContentWrapper: FC<baseComponents> = ({ children }) => {
	return (
		<main className="layout-page-content">
			{children}
		</main>
	)
}

export default ContentWrapper