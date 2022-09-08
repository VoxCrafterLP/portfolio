import { motion } from 'framer-motion';
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
	const wrapperAnimation = {
		hidden: {
			opacity: 1,
			scale: 0
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.06,
				delay: 0.1
			},
		},
	};

	return (
		<div className="min-h-screen">
			<div className="flex flex-col items-center py-16">
				<h1 className="text-4xl text-white font-semibold mb-4">My projects</h1>
				<div className="h-1 w-12 bg-purple-800 rounded-lg"/>
			</div>
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 p-12"
				variants={wrapperAnimation}
				initial="hidden"
				animate="visible"
			>
				<ProjectCard
					name="Uelzechtkanal"
					description="Tempor delectus interesset quaerendum utinam constituam latine voluptaria saepe dui. Simul eum dapibus populo leo. Habemus vis facilisi lorem nostrum definiebas assueverit luctus duis."
					type="Fullstack web application"
					details="Posidonium eleifend quam sententiae vulputate maximus donec. Parturient iuvaret senectus viverra rhoncus reprehendunt alienum reque atomorum. Inimicus menandri arcu tale a altera nonumy neglegentur. Malorum inani curae prodesset honestatis."
					link="https://uelzechtkanal.lu/"
				/>
			</motion.div>
		</div>
	);
};

export default Projects;