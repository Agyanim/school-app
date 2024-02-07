import Image from "next/image";
import Hero from "../../public/images/student.jpg"
export default async function Home() {
	
	return (
		<main className=" h-screen lg:h-[80vh] w-screen relative">
			<section className="h-full ">
				<div className="rounded">
					<Image className="w-full h-full rounded" src={Hero} alt="hero"  fill={true} objectFit="cover" />
				</div>
			</section>
			
		</main>
	);
}
