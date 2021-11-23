import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployeesList from './components/EmployeesList';
import AddEmployee from './components/AddEmployee';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<Routes>
			<Route path="/" element={<EmployeesList />} />
			<Route path="/add" element={<AddEmployee />} />
			<Route path="/employees/edit/:id" element={<AddEmployee />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
