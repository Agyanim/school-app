import { Card, Chart, RightBar, Transaction } from "@/components/client/dashboard";
import { cardItems } from "@/util/menu";
import React from "react";

const Dashboard = () => {
	return (
		<main className="flex  w-full mt-5">
			<section className="flex flex-col w-[60dvw]">
				<div className="flex gap-4">
					{cardItems.map((cardItems) => (
						<Card cardItems={cardItems} />
					))}
				</div>
        <div className="w-full bg-red-300">
          <Transaction/>
        </div>
        <div><Chart/></div>
			</section>
			<section className="bg-green-400 sticky"><RightBar/></section>
		</main>
	);
};

export default Dashboard;
