import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import muiRouter from '@/router'
import Providers from '@/common/Providers'
function App() {
	return (
		<Providers>
			<RecoilRoot>
				<RouterProvider router={muiRouter} />
			</RecoilRoot>
		</Providers>
	)
}

export default App
