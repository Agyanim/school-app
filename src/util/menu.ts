import {
	MdOutlineSpaceDashboard,
	MdProductionQuantityLimits,
	MdBalance,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { AiOutlineTransaction } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHandsHelping, FaRegUserCircle } from "react-icons/fa";

export const pageMenuList = [
	{
		title: "Pages",
		list: [
			{
				title: "Dashboard",
				path: "/dashboard",
				icon: MdOutlineSpaceDashboard,
			},
			{
				title: "Users",
				path: "/dashboard/users",
				icon: FiUsers,
			},
			{
				title: "Products",
				path: "/dashboard/products",
				icon: MdProductionQuantityLimits,
			},
			{
				title: "Transaction",
				path: "/dashboard/transaction",
				icon: AiOutlineTransaction,
			},
		],
	},
	{
		title: "Analysis",
		list: [
			{
				title: "Revenue",
				path: "/dashboard/revenue",
				icon: MdBalance,
			},
			{
				title: "Reports",
				path: "/dashboard/report",
				icon: TbReport,
			},
			{
				title: "Teams",
				path: "/dashboard/teams",
				icon: PiMicrosoftTeamsLogoBold,
			},
		],
	},
	{
		title: "User",
		list: [
			{
				title: "Settings",
				path: "/dashboard/settings",
				icon: IoSettingsOutline,
			},
			{
				title: "Help",
				path: "/dashboard/help",
				icon: FaHandsHelping,
			},
		],
	},
];

export const cardItems = [
	{
		title: "Total User",
		figure: 10928,
		percentage: 12,
		remarks: "more than previous week",
		icon: FaRegUserCircle,
	},
	{
		title: "Total User",
		figure: 10928,
		percentage: 12,
		remarks: "more than previous week",
		icon: FaRegUserCircle,
	},
	{
		title: "Total User",
		figure: 10928,
		percentage: 12,
		remarks: "more than previous week",
		icon: FaRegUserCircle,
	},
];
