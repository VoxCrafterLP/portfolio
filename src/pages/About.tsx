import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
   return (
      <div className="sm:h-[80vh] flex items-center">
         <div
            className="flex flex-col sm:flex-row gap-28 sm:gap-16 md:gap-28 
											xl:gap-72 sm:mx-auto sm:w-fit p-4"
         >
            <div className="flex flex-col items-center sm:items-start">
               <div className="relative w-fit">
                  <span
                     className="relative z-20 text-7xl text-white font-handwritten 
														 font-semibold"
                  >
                     About me
                  </span>
                  <span
                     className="absolute -top-4 -inset-1 text-[4.6rem] text-pink-600 
														blur-md font-handwritten font-semibold"
                  >
                     About me
                  </span>
               </div>
               <motion.div
                  className="h-1 rounded-lg mb-8 bg-gradient-to-r from-purple-500
												 to-purple-900 mt-8"
                  initial={{ width: '5rem' }}
                  whileInView={{ width: '10rem' }}
                  transition={{ duration: 1, delay: 0.4 }}
               />
               <p
                  className="text-white max-w-[40rem] tracking-wider text-center 
												sm:text-left"
               >
                  Hey! My name is Alex and I am a 18-year-old student in
                  Luxembourg. I started programming at the age of 13, and it
                  evolved into a passion of mine. I run a small homelab in my
                  basement and host some services for myself as well as some of
                  my friends. Furthermore, I got into FPV about 2 years ago and
                  enjoy flying FPV drones ever since. Right now, I'm planning
                  into getting into the car Modding scene.
               </p>
            </div>
            <div className="w-64 mx-auto sm:m-0">
               <img
                  src={process.env.PUBLIC_URL + 'images/person.png'}
                  alt="Person"
                  loading="lazy"
               />
            </div>
         </div>
      </div>
   );
};

export default About;
