/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import APIs from '../helpers/APIs';

function Homepage() {
	const [apod, setAPOD] = useState([]);
	useEffect(() => {
		console.log('before axios');

		const NASA_API = `${APIs.nasa.base_url}${APIs.nasa.API_KEY}`;
		console.log(NASA_API);

		axios
			.get(NASA_API)
			.then((response) => {
				//printing axios response
				console.log(response);

				//setting axios response to todaysArticles
				setAPOD(response.data.data);
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

export default Homepage;
