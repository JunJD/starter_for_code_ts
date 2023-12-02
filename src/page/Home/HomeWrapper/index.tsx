import { FC } from 'react'
import { baseComponents } from '@/common/types/com'
import './index.less'
const HomeWrapper: FC<baseComponents> = ({ children }) => {
	return <div className="Home-wrapper">{children}</div>
}

export default HomeWrapper
