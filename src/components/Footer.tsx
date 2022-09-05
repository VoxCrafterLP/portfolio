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
		<>
			<div className="text-white text-center flex flex-col items-center py-14 bg-dark_gray-100">
				<div>
					<h1 className="font-semibold text-2xl text-white mb-2 mt-4">
						Social Media
					</h1>
					<div className="w-16 h-1 rounded-xl bg-purple-700 mb-4 mx-auto" />
					<ul className="leading-7">
						<li>
							<FontAwesomeIcon
								icon={faGithub}
								className="mr-2 text-purple-500"
							/>
							<a
								href="https://github.com/voxcrafterlp/"
								className="text-gray-400 hover:text-purple-500"
							>
								Github
							</a>
						</li>
						<li>
							<FontAwesomeIcon
								icon={faYoutube}
								className="mr-1 text-purple-500"
							/>
							<a
								href="https://www.youtube.com/voxcrafter_lp/"
								className="text-gray-400 hover:text-purple-500"
							>
								Youtube
							</a>
						</li>
						<li>
							<FontAwesomeIcon
								icon={faInstagram}
								className="mr-2 text-purple-500"
							/>
							<a
								href="https://instagram.com/voxcrafter_lp/"
								className="text-gray-400 hover:text-purple-500"
							>
								Instagram
							</a>
						</li>
						<li>
							<FontAwesomeIcon
								icon={faTwitter}
								className="mr-1 text-purple-500"
							/>
							<a
								href="https://twitter.com/voxcrafter_lp/"
								className="text-gray-400 hover:text-purple-500"
							>
								Twitter
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-dark_gray-200 text-gray-400 flex flex-col items-center py-1">
				<span>©2022 Alex Drui</span>
			</div>
		</>
	);
};

export default Footer;