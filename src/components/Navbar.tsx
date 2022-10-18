import { AnimationControls, motion, useAnimation } from 'framer-motion';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, Location, NavLink, useLocation } from 'react-router-dom';
import button from './Button';
import { ContactContext } from '../context/ContactContext';

const Navbar = () => {
   const indicatorControls: AnimationControls = useAnimation();
   const [selectedItem, setSelectedItem] = useState(0);

   const location: Location = useLocation();

   // @ts-ignore
   const { setContactOpen } = useContext(ContactContext);

   const navbarItems: Array<{ name: string; link: string; button: boolean }> =
      useMemo(() => {
         return [
            { name: 'Home', link: '/', button: false },
            { name: 'About', link: '/about', button: false },
            { name: 'Projects', link: '/projects', button: false },
            {
               name: 'Blog',
               link: 'https://blog.voxcrafter.dev/',
               button: false,
            },
            { name: 'Contact', link: '#', button: true },
         ];
      }, []);

   useEffect(() => {
      const navItems = document.getElementsByClassName(
         'nav-item'
      ) as HTMLCollectionOf<HTMLSpanElement>;

      const mobileView = window.innerWidth < 950;

      let marginLeft = 0;
      for (let i = 0; i < selectedItem; i++)
         //2.5rem and 1rem
         marginLeft =
            marginLeft + navItems[i].clientWidth + (mobileView ? 16 : 40);

      indicatorControls.start({
         marginLeft: marginLeft + 'px',
         width: ['2rem', '3rem', '2rem'],
         backgroundColor: ['#fff', 'rgb(107 33 168)', '#fff'],
         transition: { duration: 0.5 },
      });
   }, [selectedItem, indicatorControls]);

   useEffect(() => {
      navbarItems.forEach(
         (item: { name: string; link: string }, index: number) => {
            if (item.link === location.pathname) setSelectedItem(index);
         }
      );
   }, [location, navbarItems]);

   return (
      <nav className="text-white px-4 xl:px-64 py-8" role="navigation">
         <motion.span
            className="absolute h-1 w-8 bg-white rounded-sm mt-8"
            animate={{ width: '10rem', backgroundColor: 'rgb(147 51 234)' }}
            transition={{ ease: 'easeOut', duration: 2 }}
         />
         <ul className="flex flex-col sm:flex-row sm:place-content-between gap-8 sm:gap-0">
            <li className="text-2xl font-black tracking-wide hover:scale-101 transition-all">
               <Link to={'/'}>voxcrafter.dev</Link>
            </li>
            <li className="flex gap-4 sm:gap-10 font-semibold text-lg">
               <motion.span
                  className="absolute h-1 w-8 bg-white rounded-sm mt-8"
                  animate={indicatorControls}
               />
               {navbarItems.map(
                  (
                     value: { name: string; link: string; button: boolean },
                     index: number
                  ) => (
                     <motion.span
                        className="hover:text-purple-600 transition-all cursor-pointer nav-item"
                        key={index}
                        whileTap={{
                           scale: 0.6,
                           transition: { duration: 0.1 },
                        }}
                        onClick={() => {
                           if (!button) setSelectedItem(index);
                        }}
                     >
                        {value.button ? (
                           <span
                              onClick={() => {
                                 if (value.name === 'Contact')
                                    setContactOpen(true);
                              }}
                           >
                              {value.name}
                           </span>
                        ) : value.link.startsWith('http') ? (
                           <a
                              href={value.link}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              {value.name}
                           </a>
                        ) : (
                           <NavLink
                              to={value.link}
                              className={({ isActive }) =>
                                 isActive ? 'text-purple-500' : 'text-white'
                              }
                              data-testid={'nav-' + value.name}
                           >
                              {value.name}
                           </NavLink>
                        )}
                     </motion.span>
                  )
               )}
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
