import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div
         className="my-12 mx-4 sm:m-auto bg-vox_gray-100 text-white py-12 px-2 
										sm:px-12 rounded-2xl flex flex-col items-center gap-12"
      >
         <h1 className="text-5xl flex flex-col sm:flex-row gap-4 text-center">
            <span className="text-purple-600 font-semibold text-7xl">404</span>
            <span> page not found</span>
         </h1>
         <Link to={'/'}>
            <Button name="Go back" />
         </Link>
      </div>
   );
};

export default NotFound;
