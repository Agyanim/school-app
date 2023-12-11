export async function getUser() {
  try {
    const response = await fetch("http://localhost:3000/api/user", {
      method: "GET",
      cache:'no-store',
      next:{
        revalidate:5
      }
    });
    return response.json();
    
  } catch (error) {
    console.log(error);

  }
}
export default async function Home() {
    const response = await getUser();
    const render = response.users?.map((user:any) => {
      return <p key={user.userid}>{`userid : ${user.userid} UserName : ${user.username}`}</p>;
    });
  return (
    <main>
      <h1>The School App</h1>
      {render}
    </main>
  );
}
