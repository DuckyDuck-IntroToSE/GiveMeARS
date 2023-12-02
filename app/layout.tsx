import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<head>
					<link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
				</head>
				<body
					className={clsx(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable
					)}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>

	);
}
