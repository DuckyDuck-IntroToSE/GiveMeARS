import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
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
					<link rel="icon" href="/images/logo.ico"></link>
				</head>
				<body
					className={clsx(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable
					)}
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
