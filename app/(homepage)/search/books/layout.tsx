import "@/styles/globals.css";
import { BooksFilterSidebar } from "@/components/sidebar/filter-sidebar";
 

export default function SearchPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex">
			<BooksFilterSidebar></BooksFilterSidebar>
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
		</div>
	);
}
