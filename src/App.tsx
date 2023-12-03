import { RouterProvider } from 'react-router-dom'
// import router from './router/index'
// import Providers from '@/common/Providers/Providers'
import muiRouter from './Mui/router'
import Providers from './Mui/common/Providers'
function App() {
	return (
		<Providers>
			<RouterProvider router={muiRouter} />
		</Providers>
	)
}

export default App
