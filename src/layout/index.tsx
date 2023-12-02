import { FC } from 'react'
import MainContentWrapper from '@/components/MainContentWrapper'
import ContentWrapper from '@/components/ContentWrapper'
import LayoutAppBar from '@/layout/LayoutAppBar'
import { Outlet } from 'react-router-dom'


const Layout: FC = () => {
	return (
		<MainContentWrapper>
			{/* appbar */}
			<LayoutAppBar />
			{/* content */}
			<ContentWrapper>
				<Outlet />  {/* chidren router */}
			</ContentWrapper>
		</MainContentWrapper>
	)
}

export default Layout
