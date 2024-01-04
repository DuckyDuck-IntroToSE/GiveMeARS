import "@/styles/globals.css";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";
import { ToasterProvider } from "@/components/providers/toaster-provider";
import { Providers } from "./providers";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			
			<html lang="en" suppressHydrationWarning>
				<head>
					<link rel="icon" href="./favicon.ico"></link>
				</head>
				<body
					className="min-h-screen bg-background font-sans antialiased"
				>
					<ToasterProvider/>
					<Providers themeProps={{ attribute: "class", defaultTheme: "white" }}>

						{children}
					</Providers>
						
				</body>
			</html>
		</ClerkProvider>

	);
}
