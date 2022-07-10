/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import APIs from '../helpers/APIs';

import ImgList from '../ImgList/ImgList';

function Homepage() {
	const [apod, setAPOD] = useState([]);
	const [monthTitle, setMonthTitle] = useState('');

	useEffect(() => {
		const date = new Date();
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();
		setMonthTitle(months[month]);

		day = day < 10 ? `0${day}` : day;
		month = month < 10 ? `0${month + 1}` : month + 1;

		let start_date = `${year}-${month}-01`;
		let end_date = `${year}-${month}-${day}`;

		const NASA_API = `${APIs.nasa.base_url}${APIs.nasa.API_KEY}&start_date=${start_date}&end_date=${end_date}`;
		console.log(NASA_API);

		axios
			.get(NASA_API)
			.then((response) => {
				//printing axios response
				console.log(response.data);

				//setting axios response to todaysArticles
				setAPOD(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="xl" sx={{ my: '1rem' }}>
				<Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
					<ImgList apod={apod} monthTitle={monthTitle} />
				</Box>
			</Container>
		</React.Fragment>
	);
}

export default Homepage;
