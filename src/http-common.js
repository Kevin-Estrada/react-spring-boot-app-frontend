import axios from 'axios';

export default axios.create({
	// baseURL: 'http://localhost:8080/api/v1'
	baseURL: 'https://spring-boot-react-backend.herokuapp.com/api/v1',
	headers: {
		'Content-Type': 'application/json',
	},
});
