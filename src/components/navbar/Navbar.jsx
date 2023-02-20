import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const { pathname } = useLocation();
	

	const userHasScrolled = () => window.scrollY > 0 ? setIsActive(true) : setIsActive(false);

	useEffect(() => {
		window.addEventListener('scroll', userHasScrolled);

		return () => window.removeEventListener('scroll', userHasScrolled);
	}, []);

	const currentUser =
	{
		id: 1,
		userName: 'Cote',
		isSeller: true,
	};

	return (
		<div className={`navbar ${isActive || pathname !== '/' ? 'active' : ''}`}>
			<div className="container">
				<div className="logo">
					<Link to="/" className='link'>
						<span className='text'>fiverr</span>
					</Link>
					<span className='dot'>.</span>
				</div>
				<div className="links">
					<span>Fiverr Business</span>
					<span>Explorer</span>
					<span>English</span>
					{!currentUser?.isSeller && <span>Become a Seller</span>}
					{!currentUser && <button>Join</button>}
					{currentUser && (
						<div className="user" onClick={() => setIsUserMenuOpen(prevState => !prevState)}>
							<img src="https://picsum.photos/200/300" alt="user image"/>
							<span>{currentUser?.userName}</span>
							{isUserMenuOpen && (
								<div className="options">
									{currentUser?.isSeller && (
										<>
											<Link className="link" to="/my-gigs">Gigs</Link>
											<Link className="link" to="/add">Add New Gig</Link>
										</>
									)}
									<Link className="link" to="/orders">Orders</Link>
									<Link className="link" to="/messages">Messages</Link>
									<Link className="link" to="/">Logout</Link>
								</div>
							)}
						</div>
					) }
				</div>
			</div>
			{isActive || pathname !== '/' && (
				<>
					<hr />
					<div className="menu">
						<Link className='link menulink' to="">Graphics & Design</Link>
						<Link className='link menulink' to="">Video & Animation</Link>
						<Link className='link menulink' to="">Writing & Translation</Link>
						<Link className='link menulink' to="">AI Services</Link>
						<Link className='link menulink' to="">Digital Marketing</Link>
						<Link className='link menulink' to="">Music & Audio</Link>
						<Link className='link menulink' to="">Programing & Tech</Link>
						<Link className='link menulink' to="">Business</Link>
						<Link className='link menulink' to="">Lifestyle</Link>
					</div>
				</>
			)}
			
		</div>
	);
};

export default Navbar;