import {Link} from "react-router-dom";

const Navbar = () => {

	return (
		<section>
			<div className='container'>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<div className="collapse navbar-collapse ms-4" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/inventory">Inventory</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/about">About</Link>
								</li>
							</ul>
						</div>
				</nav>
			</div>
		</section>
	);
};

export default Navbar;