import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faGithub,
   faInstagram,
   faTwitter,
   faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   return (
      <div>
         <div className="text-white text-center flex flex-col items-center pt-4 pb-6 bg-dark_gray-100">
            <div>
               <h1 className="font-semibold text-2xl text-white mb-2 mt-4">
                  Social Media
               </h1>
               <div className="w-16 h-1 rounded-xl bg-purple-800 mb-8 mx-auto" />
               <div className="flex gap-8 text-purple-600">
                  <a href="https://youtube.com/voxcrafter_lp/">
                     <FontAwesomeIcon
                        icon={faYoutube}
                        className="hover:text-purple-500 hover:scale-105"
                     />
                  </a>
                  <a href="https://twitter.com/voxcrafter_lp/">
                     <FontAwesomeIcon
                        icon={faTwitter}
                        className="hover:text-purple-500 hover:scale-105"
                     />
                  </a>
                  <a href="https://github.com/voxcrafterlp/">
                     <FontAwesomeIcon
                        icon={faGithub}
                        className="hover:text-purple-500 hover:scale-105"
                     />
                  </a>
                  <a href="https://instagram.com/voxcrafter_lp/">
                     <FontAwesomeIcon
                        icon={faInstagram}
                        className="hover:text-purple-500 hover:scale-105"
                     />
                  </a>
               </div>
            </div>
         </div>
         <div className="bg-dark_gray-200 text-gray-400 flex flex-col items-center py-1">
            <span>©2022 Alex Drui</span>
         </div>
      </div>
   );
};

export default Footer;
