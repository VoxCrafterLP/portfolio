import React, { useContext } from 'react';
import Button from './Button';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { ContactContext } from '../context/ContactContext';

const NamePresentation = () => {
   // @ts-ignore
   const { setContactOpen } = useContext(ContactContext);

   const { text } = useTypewriter({
      words: ['Alex Drui', 'VoxCrafter'],
      loop: 0,
      delaySpeed: 3000,
   });

   return (
      <div className="text-white sm:w-[32rem]">
         <span className="absolute w-1 h-48 sm:h-28 bg-white rounded-lg" />
         <h1 className="ml-8 text-5xl sm:text-7xl font-semibold"
             role="presentation"
         >
            <span>{text}</span>
            <Cursor />
         </h1>
         <h2 className="ml-8 text-xl font-medium text-gray-400 mt-4">
            Fullstack web developer
         </h2>
         <Button
            name="Contact me"
            className="mt-10 ml-8 sm:ml-0"
            onClick={() => setContactOpen(true)}
         />
      </div>
   );
};

export default NamePresentation;
