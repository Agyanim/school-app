import { Navbar, Sidebar } from "@/components/client/dashboard";
import { UploadProfileImageContextProvider } from "@/context/UploadImageContext";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="flex w-[100dvw] gap-5 bg-white
		"
    >
      <Sidebar />
      <section className="w-[79%] mt-5">
        <Navbar />
        <UploadProfileImageContextProvider>{children}</UploadProfileImageContextProvider>
      </section>
    </main>
  );
};

export default DashboardLayout;
