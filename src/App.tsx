import { RouterProvider } from 'react-router-dom'
import router from './router/index'
import Providers from '@/common/Providers/Providers'
function App() {
	return (
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	)
}

export default App
