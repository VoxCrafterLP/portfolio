import { motion } from 'framer-motion';
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
   const wrapperAnimation = {
      hidden: {
         opacity: 1,
         scale: 0,
      },
      visible: {
         opacity: 1,
         scale: 1,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.06,
            delay: 0.1,
         },
      },
   };

   return (
      <div className="min-h-screen">
         <div className="flex flex-col items-center py-16">
            <h1 className="text-4xl text-white font-semibold mb-4">
               My projects
            </h1>
            <div className="h-1 w-12 bg-purple-800 rounded-lg" />
         </div>
         <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 p-12"
            variants={wrapperAnimation}
            initial="hidden"
            animate="visible"
         >
            <ProjectCard
               name="Uelzechtkanal"
               description="A fullstack web application that is used to enhance public relations by providing viewers
                            with an interface to search for videos on topics they are interested in. A second objective
                            was to improve the internal management of students and their work."
               type="Fullstack web application"
               details="The backend is written in Typescript using the Express.js framework and Prisma as an ORM.
                        It uses MariaDB under the hood. The frontend uses Next.js to improve search engine results."
               link="https://uelzechtkanal.lu/"
            />
            <ProjectCard
               name="My portfolio"
               description="The portfolio website you're currently on."
               type="Fullstack web application"
               details="This website is made using React and Framer motion for the animation. Nearly every component has
                        multiple unit tests that automatically run in a CI/CD pipeline."
               link="https://github.com/VoxCrafterLP/portfolio"
            />
         </motion.div>
      </div>
   );
};

export default Projects;
