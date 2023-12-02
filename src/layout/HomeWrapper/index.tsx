import { FC } from 'react'
import { baseComponents } from '@/common/types/com'

const HelloWrold: FC<baseComponents> = ({ children }) => {
	return <div className="Home-wrapper">{children}</div>
}

export default HelloWrold
