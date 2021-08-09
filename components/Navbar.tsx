import Link from "next/link";
import { Sun, Volume2 } from "react-feather";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import Drop from "./Drop";
import Volume from "./volume";

const Header: React.FC = () => {
	return (
		<header className="max-w-screen-xl m-8 container mx-auto px-5 grid grid-cols-2 font-sans font-medium">
			<div className="flex items-center justify-center justify-self-start">
				<div className="mr-16 font-sans font-semibold flex items-center">
					<div className="mr-2">
						<Link href="/">
							<a>
								<Logo />
							</a>
						</Link>
					</div>
					<Link href="/">
						<a> Aviate Coders</a>
					</Link>
				</div>
				<div className="mr-16">
				    
					
						<Drop/>
					
				</div>
				<div className="mr-16">
					<Link href="/">
				 	Feed 
					</Link>
				</div>
				<div className="mr-14">
					<Link href="/ContactUs">
						<a>Contact</a>
					</Link>
				</div>
			</div>
			<div className="justify-self-end flex items-center justify-center ">
				<div className="mr-10">
					<DarkMode/>
				</div>
				<div className="">
					<Volume />
				</div>
			</div>
		</header>
	);
};

export default Header;
