import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import MainContentWrapper from '@/components/MainContentWrapper'

const Layout: FC = () => {
	return (
		<MainContentWrapper>
			good
			<Outlet/>
		</MainContentWrapper>
	)
}

export default Layout
