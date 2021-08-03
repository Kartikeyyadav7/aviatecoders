import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Volume2 } from "react-feather";
import Logo from "./Logo";
import DarkLogo from "./DarkLogo";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
	const { theme, setTheme } = useTheme();

	return (
		<header className="max-w-screen-xl m-8 container mx-auto px-5 grid grid-cols-2 font-sans font-medium">
			<div className="flex items-center justify-center justify-self-start">
				<div className="mr-16 font-sans font-semibold flex items-center">
					<div className="mr-2">
						<Link href="/">
							<a>{theme === "dark" ? <DarkLogo /> : <Logo />}</a>
						</Link>
					</div>
					<Link href="/">
						<a> Aviate Coders</a>
					</Link>
				</div>
				<div className="mr-16">
					<Link href="/blog">
						<a> Blog</a>
					</Link>
				</div>
				<div className="mr-16">
					<Link href="/feed">
						<a>Feed</a>
					</Link>
				</div>
				<div className="mr-14">
					<Link href="/">
						<a>Contact</a>
					</Link>
				</div>
			</div>
			<div className="justify-self-end flex items-center justify-center ">
				{theme === "dark" ? (
					<Moon
						className="mr-10 cursor-pointer"
						onClick={() => setTheme("light")}
					/>
				) : (
					<Sun
						className="mr-10 cursor-pointer"
						onClick={() => setTheme("dark")}
					/>
				)}

				<div className="cursor-pointer">
					<Volume2 />
				</div>
			</div>
		</header>
	);
};

export default Header;
