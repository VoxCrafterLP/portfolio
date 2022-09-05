import { AnimationControls, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
	const indicatorControls: AnimationControls = useAnimation();
	const [selectedItem, setSelectedItem] = useState(0);

	const navbarItems: Array<{ name: string; link: string }> = [
		{ name: 'Home', link: '#' },
		{ name: 'About', link: '#' },
		{ name: 'Projects', link: '#' },
		{ name: 'Blog', link: '#' },
		{ name: 'Contact', link: '#' },
	];

	useEffect(() => {
		const navItems = document.getElementsByClassName(
			'nav-item'
		) as HTMLCollectionOf<HTMLSpanElement>;

		const mobileView = window.innerWidth < 950;

		let marginLeft = 0;
		for (let i = 0; i < selectedItem; i++)
			//2.5rem and 1rem
			marginLeft = marginLeft + navItems[i].clientWidth + (mobileView ? 16 : 40);

		indicatorControls.start({
			marginLeft: marginLeft + 'px',
			width: ['2rem', '3rem', '2rem'],
			backgroundColor: ['#fff', 'rgb(107 33 168)', '#fff'],
			transition: { duration: 0.5 },
		});
	}, [selectedItem]);

	return (
		<div className="text-white px-4 sm:px-64 py-8">
			<ul className="flex flex-col sm:flex-row sm:place-content-between gap-8 sm:gap-0">
				<li className="text-2xl font-black tracking-wide">
					voxcrafter.dev
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
								{value.name}
							</motion.span>
						)
					)}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;