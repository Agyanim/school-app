import Link from "next/link";

const ProfilePage = () => {
  return (
    <main className="flex flex-col items-center ">
      <h1 className="my-[2rem] text-2xl text-orange-800 font-bold">
        User Profile
      </h1>
      <section>
        <img
          className="w-[8rem] h-[10rem] rounded mb-[2rem]"
          src="/upload/background-image.jpeg"
          alt="profile-image"
        />
      </section>
      <section className="flex flex-col gap-5 font-bold items-center text-orange-900 text-lg">
        <p>
          UserName: <span className="font-normal ml-2">agyanim</span>{" "}
        </p>
        <p>
          First Name: <span className="font-normal ml-2">Gideon</span>{" "}
        </p>
        <p>
          Last Name: <span className="font-normal ml-2">Okai Boateng</span>{" "}
        </p>
        <p>
          Email: <span className="font-normal ml-2">agyanim@yahoo.com</span>{" "}
        </p>
        <p>
          Phone: <span className="font-normal ml-2">0246793987</span>{" "}
        </p>
      </section>
      <Link href='/dashboard/profile/update' className="text-blue-600 font-bold mt-5">Edit</Link>
    </main>
  );
};

export default ProfilePage;
