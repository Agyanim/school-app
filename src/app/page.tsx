"use client"
import { getRequest } from "@/axios-handlers/axiosUserHandler";
import { useQuery } from "@tanstack/react-query";

export default async function Home() {
	// const response = await getRequest("user/");

const {data,error}=useQuery({
	queryKey:["user"],
	queryFn: getRequest("user/").then(res=>{return res}),
})

console.log(data);

	// const render = response.users?.map((user: any) => {
	// 	return (
	// 		<p
	// 			key={user?.userid}
	// 		>{`userid : ${user.userid} UserName : ${user.username}`}</p>
	// 	);
	// });
	return (
		<main>
			<h1>The School App</h1>
		
		</main>
	);
}
