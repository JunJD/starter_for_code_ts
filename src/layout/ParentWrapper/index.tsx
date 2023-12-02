import { baseComponents } from '@/common/types/com'
import { FC } from 'react'
import './index.less'
const ParentWrapper: FC<baseComponents> = ({children}) => {
	return (
		<div className="parent-wrapper">{children}</div>
	)
}

export default ParentWrapper