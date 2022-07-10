/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIs from '../helpers/APIs';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Earthquakes() {
	const [earthQuakes, setEarthQuakes] = useState([]);

	useEffect(() => {
		const date = new Date();
		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();
		day = day < 10 ? `0${day}` : day;
		month = month < 10 ? `0${month + 1}` : month + 1;

		let start_date = `${year}-${month}-01`;
		let end_date = `${year}-${month}-${day}`;

		const USGS_API = `${APIs.usgs.base_url}&starttime=${start_date}&endtime=${end_date}&minmagnitude=5`;
		// console.log(USGS_API);

		axios
			.get(USGS_API)
			.then((response) => {
				//printing axios response
				console.log(response.data);

				//setting axios response to todaysArticles
				setEarthQuakes(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="xl">
				<Box sx={{ bgcolor: '#cfe8fc', height: '100vh', my: '1rem' }} />
			</Container>
		</React.Fragment>
	);
}

export default Earthquakes;
