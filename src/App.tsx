import { RouterProvider } from 'react-router-dom'
import muiRouter from '@/router'
import Providers from '@/common/Providers'
function App() {
	return (
		<Providers>
			<RouterProvider router={muiRouter} />
		</Providers>
	)
}

export default App
