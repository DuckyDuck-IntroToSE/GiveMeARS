import SideBar from "@/components/sidebar";
import { DashboardNavbar } from "@/components/navbar";
import { SidebarWrapper } from "@/components/sidebar/sidebar";
import Footer from "@/components/footer";


export default function InstructorPage({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="h-full flex">

                {/* <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                        <DashboardNavbar></DashboardNavbar>
                    </div>
                    <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                        <SideBar></SideBar>
                    </div> */}
                <SidebarWrapper />
                <main className="h-full">
                    {children}
                </main>
            </div>
        </>

    );
}