import axios from 'axios';

export default axios.create({
	// baseURL: 'http://localhost:8080/api/v1'
	baseURL: `${process.env.REACT_APP_API_URL}`,
	headers: {
		'Content-Type': 'application/json',
	},
});
