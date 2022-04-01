import Home from './pages/home/Home'
import Crew from './pages/crew/Crew'
import Destination from './pages/destination/Destination'
import Technology from './pages/technology/Technology'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Data from './fake-data/data.json'


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />}></Route>
					<Route path='crew'>
						<Route index element={<Crew Data={Data.crew} />} />
					</Route>
					<Route path='destination'>
						<Route index element={<Destination Data={Data.destinations} />} />
					</Route>
					<Route path='technology'>
						<Route index element={<Technology Data={Data.technology} />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
