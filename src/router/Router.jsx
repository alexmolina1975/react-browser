import { Route, Routes } from 'react-router-dom';
import Title from '../components/title/Title';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Title title='Inicio'></Title>} />
			<Route path='/mercurio' element={<Title title='Mercury'></Title>} />
			<Route path='/venus' element={<Title title='Venus'></Title>} />
			<Route path='/earth' element={<Title title='Earth'></Title>} />
		</Routes>
	);
};

export default Router;
