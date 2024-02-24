import React from "react";
import { IconType } from "react-icons";

interface cardItemProps {
	cardItems: {
		title: string;
		figure: number;
		percentage: number;
		remarks: string;
		icon: IconType;
	};
}
const Card = ({ cardItems }: cardItemProps) => {
	return (
		<div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white py-3 pr-3 flex flex-col gap-2 pl-10 relative text-sm">
      <div className="absolute left-3 top-[0.9rem]">

				<cardItems.icon />
      </div>
			<div className="flex gap-2">
				<h1>{cardItems.title}</h1>
			</div>
      <p>{cardItems.figure.toLocaleString()}</p>
      <p><span className="text-yellow-300 ">{cardItems.percentage}% </span>{cardItems.remarks}</p>
		</div>
	);
};

export default Card;
