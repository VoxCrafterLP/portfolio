import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import NamePresentation from '../components/NamePresentation';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Home = () => {
   return (
      <ParallaxProvider>
         <div
            className="mt-28 px-8 xl:px-64 flex flex-col sm:flex-row
			                sm:place-content-between sm:items-center gap-64 sm:gap-0"
         >
            <NamePresentation />
            <Parallax speed={-20}>
               <div className="w-72 md:w-96 2xl:w-[50rem]">
                  <img
                     src={process.env.PUBLIC_URL + 'images/laptop.png'}
                     alt="Laptop"
                     loading="eager"
                  />
               </div>
            </Parallax>
         </div>
         <div className="mt-[30rem] sm:mt-[45rem] px-8 2xl:px-64 flex flex-col xl:flex-row">
            <Parallax speed={15}>
               <div className="w-72 md:w-96 sm:ml-40 xl:ml-0">
                  <img
                     src={process.env.PUBLIC_URL + 'images/technology.png'}
                     alt="Technology"
                     loading="lazy"
                  />
               </div>
            </Parallax>
            <div className="text-white sm:ml-48">
               <h1 className="text-4xl font-bold mt-24 mb-3">Technologies</h1>
               <motion.div
                  className="h-1 rounded-lg mb-8 bg-gradient-to-r from-purple-500
												 to-purple-900"
                  initial={{ width: '5rem' }}
                  whileInView={{ width: '10rem' }}
                  transition={{ duration: 1, delay: 0.4 }}
               />
               <p className="max-w-[40rem] tracking-wider">
                  I have worked so far on several small and large projects,
                  including a fullstack web app for a customer. The programming
                  languages I use the most are Typescript/JavaScript and Java,
                  but I'm already planning out a project that will be written in
                  Go. A list of my skills can be seen on my GitHub profile.
               </p>
               <a
                  href="https://github.com/VoxCrafterLP/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Button name="My GitHub" className="mt-10" />
               </a>
            </div>
         </div>
         <div className="mt-96 sm:mt-[45rem] px-8 2xl:px-64 flex flex-col xl:flex-row pb-96">
            <div className="text-white sm:ml-8">
               <h1 className="text-4xl font-bold sm:mt-24 mb-3">DevOps</h1>
               <motion.div
                  className="h-1 rounded-lg mb-8 bg-gradient-to-l from-blue-500
												 to-blue-900"
                  initial={{ width: '5rem' }}
                  whileInView={{ width: '10rem' }}
                  transition={{ duration: 1, delay: 0.4 }}
               />
               <p className="max-w-[40rem] tracking-wider">
                  I use a CI pipeline on nearly every project as it is an
                  important tool to ensure that everything works together as
                  intended and to save time by resolving problems before they
                  even come up.
               </p>
            </div>
            <Parallax speed={-25}>
               <div className="w-72 md:w-[30rem] sm:ml-40 mt-64 sm:mt-0">
                  <img
                     src={process.env.PUBLIC_URL + 'images/robot.png'}
                     alt="Robot"
                     loading="lazy"
                  />
               </div>
            </Parallax>
         </div>
      </ParallaxProvider>
   );
};

export default Home;
