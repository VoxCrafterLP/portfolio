import { AnimationControls, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, Location, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
	const indicatorControls: AnimationControls = useAnimation();
	const [selectedItem, setSelectedItem] = useState(0);

	const location: Location = useLocation();

	const navbarItems: Array<{ name: string; link: string }> = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' },
		{ name: 'Projects', link: '/projects' },
		{ name: 'Blog', link: 'https://blog.voxcrafter.dev/' },
		{ name: 'Contact', link: '/contact' },
	];

	useEffect(() => {
		const navItems = document.getElementsByClassName(
			'nav-item'
		) as HTMLCollectionOf<HTMLSpanElement>;

		const mobileView = window.innerWidth < 950;

		let marginLeft = 0;
		for (let i = 0; i < selectedItem; i++)
			//2.5rem and 1rem
			marginLeft =
				marginLeft + navItems[i].clientWidth + (mobileView ? 16 : 40);

		indicatorControls.start({
			marginLeft: marginLeft + 'px',
			width: ['2rem', '3rem', '2rem'],
			backgroundColor: ['#fff', 'rgb(107 33 168)', '#fff'],
			transition: { duration: 0.5 },
		});
	}, [selectedItem]);

	useEffect(() => {
		navbarItems.forEach(
			(item: { name: string; link: string }, index: number) => {
				if (item.link === location.pathname) setSelectedItem(index);
			}
		);
	}, [location]);

	return (
		<div className="text-white px-4 xl:px-64 py-8">
			<ul className="flex flex-col sm:flex-row sm:place-content-between gap-8 sm:gap-0">
				<li className="text-2xl font-black tracking-wide hover:scale-101 transition-all">
					<Link to={'/'}>voxcrafter.dev</Link>
				</li>
				<motion.span
					className="absolute h-1 w-8 bg-white rounded-sm mt-8"
					animate={{ width: '10rem', backgroundColor: 'rgb(147 51 234)' }}
					transition={{ ease: 'easeOut', duration: 2 }}
				/>
				<li className="flex gap-4 sm:gap-10 font-semibold text-lg">
					<motion.span
						className="absolute h-1 w-8 bg-white rounded-sm mt-8"
						animate={indicatorControls}
					/>
					{navbarItems.map(
						(value: { name: string; link: string }, index: number) => (
							<motion.span
								className="hover:text-purple-600 transition-all cursor-pointer nav-item"
								key={index}
								whileTap={{
									scale: 0.6,
									transition: { duration: 0.1 },
								}}
								onClick={() => setSelectedItem(index)}
							>
								{value.link.startsWith('http') ? (
									<a href={value.link}>{value.name}</a>
								) : (
									<NavLink
										to={value.link}
										className={({ isActive }) =>
											isActive ? 'text-purple-500' : 'text-white'
										}
									>
										{value.name}
									</NavLink>
								)}
							</motion.span>
						)
					)}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
