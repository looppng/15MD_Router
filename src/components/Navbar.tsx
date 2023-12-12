const Navbar = () => {

	return (
		<section>
			<div className='container'>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<div className="collapse navbar-collapse ms-4" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="/">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/inventory">Inventory</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/create">Create</a>
								</li>
							</ul>
						</div>
				</nav>
			</div>
		</section>
	);
};

export default Navbar;