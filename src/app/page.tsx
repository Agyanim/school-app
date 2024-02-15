import Image from "next/image";
import Hero from "../../public/images/student.jpg";
import { NavigationBar } from "@/components/client";
export default async function Home() {
	return (
		<>
			<NavigationBar />
			<main className=" h-screen relative w-full">
				<section className="h-full">
					<div className="rounded">
						<Image
							className="w-full h-full rounded"
							src={Hero}
							alt="hero"
							fill={true}
							objectFit="cover"
						/>
					</div>
				</section>
					<footer>footer</footer>
			</main>
		</>
	);
}
