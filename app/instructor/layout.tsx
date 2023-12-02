import SideBar from "@/components/sidebar";

export default function InstructorPage({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <SideBar></SideBar>
            </div>
            <main className="md:pl-56 h-full">
                {children}  
            </main>
            
        </div>
    );
}