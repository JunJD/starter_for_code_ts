import { baseComponents } from '@/common/types/com'
import { FC } from 'react'
import './index.less'

const HomeRightSection: FC<baseComponents> = ({ children }) => {
	return (
		<div className='home-right-section'>{children}</div>
	)
}

export default HomeRightSection