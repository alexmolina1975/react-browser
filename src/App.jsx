import { BrowserRouter } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import Div from './components/capa/Div';
import DivSup from './components/capa/DivSuperior';

const App = () => {
	return (
		<>
			<GlobalStyles></GlobalStyles>

			<DivSup
				left='50'
				top='80'
				textT='NUESTRA PRIMERA APP'
				textP='Esto es muuuu difícil'
			></DivSup>

			<Div
				shadowcolor='#0a0a0a'
				left='545'
				top='312'
				textT='T'
				textP='A'
				srcImage='geology-neptune.png'
			></Div>

			<Div
				shadowcolor='#0a0a0a'
				left='925'
				top='452'
				textT='C'
				textP='Hl '
				srcImage='geology-saturn.png'
			></Div>

			<Div
				shadowcolor='#0a0a0a'
				left='545'
				top='592'
				textT='K'
				textP='H'
				srcImage='geology-jupiter.png'
			></Div>

			<Div
				shadowcolor='#0a0a0a'
				left='165'
				top='452'
				textT='S'
				textP='H'
				srcImage='geology-venus.png'
			></Div>

			<BrowserRouter>
				<Menu></Menu>
				<Router></Router>
			</BrowserRouter>
		</>
	);
};

export default App;
