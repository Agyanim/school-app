import React from "react";
import { SearchBar } from "..";

const Navbar = () => {
	return (
		<nav className="bg-gradient-to-r from-orange-800 to-pink-800 w-full h-[10%] shadow-md shadow-slate-950/50 flex justify-between items-center">
			<div className="pl-5">
				<h1 className="text-white">Dashboard</h1>
			</div>
			<SearchBar />
		</nav>
	);
};

export default Navbar;
