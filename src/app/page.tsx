import { getRequest } from "@/axios-handlers/axiosHandler";

export default async function Home() {
	const response = await getRequest("user/");
	const render = response.users?.map((user: any) => {
		return (
			<p
				key={user?.userid}
			>{`userid : ${user.userid} UserName : ${user.username}`}</p>
		);
	});
	return (
		<main>
			<h1>The School App</h1>
			{render}	
		</main>
	);
}
