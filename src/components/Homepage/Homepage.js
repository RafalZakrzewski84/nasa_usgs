/** @format */

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Homepage() {
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
