"use client";
import React from "react";
import Image from "next/image";
import ProfileImage from "../../../../../public/images/gid.png";
import { pageMenuList } from "@/util/menu";
import { AiOutlineLogout } from "react-icons/ai";
import MenuList from "./MenuList";

const Sidebar = () => {
	return (
		<section className="bg-gradient-to-r from-orange-800 to-pink-800 w-[20%] shadow-slate-950 sticky shadow-inner">
			<div className="flex flex-col items-start mt-10 ml-5 gap-10">
				<div className="flex gap-2 items-center">
					<Image
						className="rounded-[50%]"
						src={ProfileImage}
						alt="profileImage"
						width={50}
						height={50}
					/>
					<div className="text-white/80 text-sm">
						<h1>Gideon</h1>
						<p className="italic">Administrator</p>
					</div>
				</div>
				<div className="text-white w-full">
					{pageMenuList.map((menu) => {
						return (
							<div className="mb-8 w-full">
								<h1 className="">{menu.title}</h1>
								{menu.list.map((menu) => (
									<MenuList Menu={menu} />
								))}
							</div>
						);
					})}
				</div>
				<button className="text-white mt-[-2rem] mb-[5rem] flex items-center gap-2 w-[90%] hover:bg-slate-900/50 p-3">
				{<AiOutlineLogout />}Log out
				</button>
			</div>
		</section>
	);
};

export default Sidebar;
