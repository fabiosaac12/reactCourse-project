import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className="green">
		<div className="container">
			<div className="row">
				<div className="col-md-6 d-flex justify-content-start align-items-center">
					<h3><Link to="/">Navbar</Link></h3>
				</div>
				<div className="col-md-6 d-flex justify-content-end align-items-center">
					<span><NavLink to="/favorites">Favorites</NavLink></span>
					<span><NavLink to="/favorites">Favorites</NavLink></span>
					<span><NavLink to="/favorites">Favorites</NavLink></span>
				</div>
			</div>
		</div>
    </nav>
}

export default Navbar
