import { BrowserRouter } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles></GlobalStyles>
			<BrowserRouter>
				<Menu></Menu>
				<Router></Router>
			</BrowserRouter>
		</>
	);
};

export default App;
