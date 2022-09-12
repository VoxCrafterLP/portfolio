import { motion } from 'framer-motion';
import React from 'react';
import { ButtonProps } from '../types/props/ButtonProps';

const Button = (props: ButtonProps) => {
   return (
      <motion.button
         className={
            'py-2 px-16 ring-2 ring-white rounded-full font-medium hover:px-20 ' +
            'hover:text-purple-800 hover:ring-purple-600 transition-all ' +
            props.className
         }
         onClick={() => {
            if (props.onClick) props.onClick();
         }}
         whileTap={{ scale: 0.75, transition: { duration: 0.1 } }}
      >
         {props.name}
      </motion.button>
   );
};

export default Button;
