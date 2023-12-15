const Home = () => {
	return (
			<div className='container mt-4'>
				<div className='landing-header'>
					<h1>Welcome to Warehouse Haven</h1>
					<p>Your One-Stop Destination for Quality Products</p>
				</div>

				<div className='landing-info'>
					<p>
						Discover a world of possibilities at Warehouse Haven. We take pride in
						offering a curated selection of premium products to meet your every
						need.
					</p>

					<div className='featured-products'>
						<div className='product'>
							<img
									src='public/product1.jpg'
									alt='Product 1'
									className='product-image'
							/>
							<h3>Electronics Redefined</h3>
							<p>Stay connected with our cutting-edge gadgets.</p>
						</div>

						<div className='product'>
							<img
									src='public/product2.jpg'
									alt='Product 2'
									className='product-image'
							/>
							<h3>Fashion Forward</h3>
							<p>Explore the latest trends in clothing and accessories.</p>
						</div>

						<div className='product'>
							<img
									src='public/product3.jpg'
									alt='Product 3'
									className='product-image'
							/>
							<h3>Home Essentials</h3>
							<p>Upgrade your living space with our essential home appliances.</p>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Home;
