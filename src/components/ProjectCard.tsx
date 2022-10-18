import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { ProjectCardProps } from '../types/props/ProjectCardProps';
import Button from './Button';

const ProjectCard = (props: ProjectCardProps) => {
   const cardAnimation = {
      hidden: {
         y: -20,
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
      },
   };

   const [extended, setExtended] = useState(false);

   return (
      <motion.div variants={cardAnimation} role="listitem">
         <div
            className="bg-vox_gray-100 bg-opacity-20 drop-shadow-2xl rounded-2xl
										ring ring-pink-600 ring-opacity-20 p-12 text-white group
										flex flex-col items-center transition-all hover:scale-103"
            onMouseLeave={() => setExtended(false)}
         >
            <h1 className="text-4xl font-bold mb-2">{props.name}</h1>
            <div
               className="h-1 w-12 bg-purple-800 rounded-lg group-hover:w-20
												transition-all ease-in-out duration-300 mb-5"
            />
            <span className="text-gray-400 mb-10" data-testid="type">
               {props.type}
            </span>
            <p className="text-center" data-testid="description">
               {props.description}
            </p>
            <AnimatePresence>
               {extended && (
                  <motion.div
                     initial={{ height: 0 }}
                     animate={{ height: 'auto' }}
                     exit={{ height: 0 }}
                     transition={{ duration: 0.4 }}
                     className="overflow-hidden"
                  >
                     <h2 className="pt-10 text-xl font-semibold mb-2">
                        Details
                     </h2>
                     <p data-testid="details">{props.details}</p>
                  </motion.div>
               )}
            </AnimatePresence>
            <Button
               name={extended ? 'Visit project' : 'Learn more'}
               className="group-hover:scale-103 mt-10"
               onClick={() => {
                  if (!extended) {
                     setExtended(true);
                     return;
                  }

                  window.open(props.link, '_blank');
               }}
            />
         </div>
      </motion.div>
   );
};

export default ProjectCard;
