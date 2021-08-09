import Link from "next/link";
import { useState } from "react";
import { Menu } from "react-feather";
import Logo from "./Logo";
import DarkLogo from "./DarkLogo";
import { useTheme } from "next-themes";
import DarkMode from "./DarkMode";
import Volume from "./Volume";
import DropDown from "./DropDown";

const Navbar: React.FC = () => {
	const { theme, setTheme } = useTheme();
	const [toggle, setToggle] = useState(false);
	const handleClick = () => {
		setToggle(!toggle);
	};

	return (
		<div>
			{/* navbar goes here */}
			<nav>
				<div className="max-w-screen-xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-4">
							{/* logo */}
							<div>
								<Link href="/">
									<a className="flex items-center py-5 px-2 ">
										<a>{theme === "dark" ? <DarkLogo /> : <Logo />}</a>

										<span className="font-bold pl-1">Aviate Coders</span>
									</a>
								</Link>
							</div>
							{/* primary nav */}
							<div className="hidden md:flex items-center space-x-1  ">
								<div className="md:flex items-center hover:underline">
									<Link href="/blog">
										<DropDown />
									</Link>
								</div>
								<div className="hover:underline">
									<Link href="/feed">
										<a className="py-5 px-3 ">Feed</a>
									</Link>
								</div>
								<div className="hover:underline">
									<Link href="/contact">
										<a className="py-5 px-3 ">Contact</a>
									</Link>
								</div>
							</div>
						</div>
						{/* secondary nav */}
						<div className="hidden md:flex items-center space-x-1">
							<DarkMode />

							<div className="py-2 px-3 cursor-pointer">
								<Volume />
							</div>
						</div>
						{/* mobile button goes here */}
						<div className="md:hidden flex items-center">
							<button onClick={handleClick} className="mobile-menu-button">
								<Menu />
							</button>
						</div>
					</div>
				</div>
				{/* mobile menu */}

				{toggle === true ? (
					<div className="sidebar md:hidden  md:-translate-x-full  bg-[#fefefe] bg-opacity-90 dark:bg-[#1C2228] font-medium inset-y-0 left-0 transform transition duration-200 ease-in-out  w-64 space-y-6 py-7 px-2 absolute top-0 h-full ">
						{/* nav */}
						<nav>
							<Link href="/">
								<a className="block py-2.5 px-4 rounded transition duration-200 ">
									Home
								</a>
							</Link>
							<Link href="/blog">
								<a className="block py-2.5 px-4 rounded transition duration-200 ">
									Blog
								</a>
							</Link>
							<Link href="/blog/javascript">
								<a className="block py-2.5 px-6 rounded transition duration-200 ">
									Javascript
								</a>
							</Link>
							<Link href="/blog/webdev">
								<a className="block py-2.5 px-6 rounded transition duration-200 ">
									Web Dev
								</a>
							</Link>
							<Link href="/blog/reactnative">
								<a className="block py-2.5 px-6  rounded transition duration-200 ">
									React Native
								</a>
							</Link>
							<Link href="/feed">
								<a className="block py-2.5 px-4 rounded transition duration-200 ">
									Feed
								</a>
							</Link>

							<div className=" flex items-center space-x-1">
								<DarkMode />

								<div className="py-2 px-3 cursor-pointer">
									<Volume />
								</div>
							</div>
						</nav>
					</div>
				) : (
					<></>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
