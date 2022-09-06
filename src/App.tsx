import React, { ReactNode } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/404';
import { AnimatePresence, motion } from 'framer-motion';

const App = () => {
	const location = useLocation();

	function getElement(element: ReactNode): ReactNode {
		return (
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -100 }}
			>
				{element}
			</motion.div>
		);
	}

	return (
		<div
			className="bg-gradient-to-br from-bggradient-1 to-bggradient-2 
										min-h-screen flex flex-col place-content-between 
										overflow-hidden"
		>
			<Navbar />
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={getElement(<Home />)} />
					<Route path="/about" element={getElement(<About />)} />
					<Route path="/projects" element={getElement(<Projects />)} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</div>
	);
};

export default App;
