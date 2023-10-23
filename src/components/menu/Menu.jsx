import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/mercurio'>Mercurio</Link>
				</li>
				<li>
					<Link to='/venus'>Venus</Link>
				</li>
				<li>
					<Link to='/earth'>Earth</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
