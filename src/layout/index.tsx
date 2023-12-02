import { FC } from 'react'
import MainContentWrapper from '@/layout/MainContentWrapper'
import ContentWrapper from '@/layout/ContentWrapper'
import LayoutAppBar from '@/layout/LayoutAppBar'
import { Outlet } from 'react-router-dom'
import ParentWrapper from '@/layout/ParentWrapper'
import Navigation from '@/layout/Navigation'


const Layout: FC = () => {
	return (
		<ParentWrapper>
			<Navigation/>
			<MainContentWrapper>
				{/* appbar */}
				<LayoutAppBar />
				{/* content */}
				<ContentWrapper>
					<Outlet />  {/* chidren router */}
				</ContentWrapper>
			</MainContentWrapper>
		</ParentWrapper>
	)
}

export default Layout
