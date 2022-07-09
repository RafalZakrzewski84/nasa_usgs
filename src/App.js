/** @format */

import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import SearchImg from './components/SearchImg/SearchImg';
import Earthquakes from './components/Earthquakes/Earthquakes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/searchimg" element={<SearchImg />} />
					<Route path="/earthquakes" element={<Earthquakes />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
