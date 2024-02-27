import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";
import { FaBell, FaRegUserCircle } from "react-icons/fa";

const SearchBar = () => {
	return (
		<section className="flex pr-10 gap-4 items-center justify-center">
			<div className="flex items-center">
				<div className="absolute pl-1 ">
					<IoSearchOutline size={25} />
				</div>
				<input className="pl-8 py-2 rounded" placeholder="Search" type="text" />
			</div>
			<div className="flex items-center justify-center gap-4">
				<button>
					<MdPersonSearch color="white" size={30} />
				</button>
				<button>
					<FaBell size={23} color="white" />
				</button>
				<button>
					<FaRegUserCircle color="white" size={25} />
				</button>
			</div>
		</section>
	);
};

export default SearchBar;
