import "@/styles/globals.css";
import { CoursesFilterSidebar } from "@/components/sidebar/filter-sidebar";
import { CoursesSearchInput } from "@/components/input/search-inputs";
import { db } from "@/lib/ds";


const SearchPageLayout = async ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const categories = await db.category.findMany({
		orderBy: {
		  name: "asc"
		}
	  });

	return (
		<div className="relative flex">
			<CoursesFilterSidebar items={categories}></CoursesFilterSidebar>
			<main className="container mx-auto max-w-7xl px-6 flex-grow py-6">
				<CoursesSearchInput></CoursesSearchInput>
				{children}
			</main>
		</div>
	);
}

export default SearchPageLayout;