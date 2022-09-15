import React, { useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ContactContext } from '../context/ContactContext';
import Button from './Button';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
   // @ts-ignore
   const { contactOpen, setContactOpen } = useContext(ContactContext);

   const [email, setEmail] = useState('');
   const [emailValid, setEmailValid] = useState<boolean>();
   const [message, setMessage] = useState('');
   const [recaptcha, setRecaptcha] = useState('');

   function submit(): void {
      if (!emailValid) return;

      const payload = {
         email,
         message,
         recaptcha,
      };

      fetch('https://contact.voxcrafter.dev/', {
         method: 'POST',
         body: JSON.stringify(payload),
         headers: {
            'Content-Type': 'application/json',
         },
      })
				.then(() => {
					setContactOpen(false);
					setEmail('');
					setMessage('');
					setRecaptcha('');
					setEmailValid(undefined);
				})
   }

   return (
      <div className="z-30">
         {contactOpen && (
            <>
               <div
                  className="h-full w-full absolute top-0 left-0 bg-vox_gray-200 opacity-80 disable-scrollbar"
                  onClick={() => setContactOpen(false)}
                  data-testid="contact-background"
               />
               <AnimatePresence>
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="absolute w-screen bg-vox_gray-100 rounded-xl top-1/2 left-1/2
                                   -translate-x-1/2 -translate-y-1/2 z-10 flex-col flex items-center sm:w-[42rem] pb-8"
                  >
                     <FontAwesomeIcon
                        icon={faXmark}
                        className="text-gray-400 text-xl self-end mt-3 mr-4 cursor-pointer
                                                   hover:text-gray-100 transition-all ease-in"
                        onClick={() => setContactOpen(false)}
                     />
                     <div className="text-white flex flex-col items-center">
                        <h1 className="text-2xl font-semibold mb-2 text-center">
                           Contact me
                        </h1>
                        <div className="h-1 w-12 bg-purple-800 rounded-lg mb-8" />
                        <div className="flex flex-col w-72 sm:w-96">
                           <input
                              value={email}
                              placeholder="Your E-Mail address"
                              type="email"
                              className={
                                 'bg-vox_gray-200 text-white w-full h-12 rounded-2xl px-4 outline-none ' +
                                 'ring-opacity-70 mb-6 focus:ring focus:ring-2 ring-purple-500 ' +
                                 (emailValid !== undefined ? 'ring-2 ' : '') +
                                 (emailValid !== undefined
                                    ? emailValid
                                       ? '!ring-green-500 '
                                       : '!ring-red-500'
                                    : '')
                              }
                              onChange={(event) => {
                                 setEmail(event.target.value);
                                 setEmailValid(
                                    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(
                                       event.target.value
                                    )
                                 );
                              }}
                              data-testid="contact-email"
                           />
                           <textarea
                              value={message}
                              placeholder="Your message"
                              className="bg-vox_gray-200 text-white w-full h-[10.5rem] rounded-2xl p-4
															 outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-70 mb-8"
                              onChange={(event) =>
                                 setMessage(event.target.value)
                              }
                           />
                           <ReCAPTCHA
                              sitekey="6LeCUf0hAAAAAMPZNFP2yn0Na0lw0qvPaVS296H2"
                              onChange={(token: string | null) =>
                                 setRecaptcha(token as string)
                              }
                              theme="dark"
                              className="mb-8"
                           />
                           <Button
                              name="Submit"
                              className="hover:!px-16"
                              onClick={() => submit()}
                           />
                        </div>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </>
         )}
      </div>
   );
};

export default Contact;
