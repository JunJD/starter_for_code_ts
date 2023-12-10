import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import muiRouter from '@/router'
import Providers from '@/common/Providers'
function App() {
	return (
		<RecoilRoot>
			<Providers>
				<RouterProvider router={muiRouter} />
			</Providers>
		</RecoilRoot>
	)
}

export default App
