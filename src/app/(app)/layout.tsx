import { NavigationBar } from "@/components/client";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavigationBar />
			{children}
		</>
	);
}
