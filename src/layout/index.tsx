import { FC } from 'react'
import { Outlet } from 'react-router-dom'
// import logo from '../logo.svg'
// import './layout.less'

const Layout: FC = () => {
	return (
		<div className="App">
			good
			<Outlet/>
		</div>
	)
}

export default Layout
