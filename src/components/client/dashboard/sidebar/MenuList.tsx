"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

interface MenuPropType {
	Menu: {
		title: string;
		path: string;
		icon: IconType;
	};
}

const MenuList = ({ Menu }: MenuPropType) => {
	const router = usePathname();

	return (
			<ul key={Menu.title} className="flex flex-col  text-sm w-full">
				<li  className={ router==Menu.path? " w-[90%] bg-slate-900/50 p-3":" w-[90%] hover:bg-slate-900/50 p-3 my-1 border-none"} key={Menu.title}>
					<Link key={Menu.title}
						className="flex justify-start items-center gap-2"
						href={Menu.path}
					>
						<span>{<Menu.icon />}</span> {Menu.title}
					</Link>
				</li>
			</ul>
	);
};

export default MenuList;
