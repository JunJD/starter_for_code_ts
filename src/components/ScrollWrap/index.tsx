import { baseComponents } from '@/common/types/com'
import { FC } from 'react'
import { getDeviceName } from '@/utils/getDevice'
import './index.less'

const className = getDeviceName() === 'Mac' ? 'wrap': 'wrap scroll-wrap'
console.log('🥑',className)
const ScrollWrap: FC<baseComponents> = ({ children }) => {
	
	return (
		<div className={className}>{children}</div>
	)
}

export default ScrollWrap
