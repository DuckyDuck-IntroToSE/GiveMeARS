import { Menu }  from "lucide-react"
import SideBar from "./sidebar"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
            <Menu></Menu>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0 bg-white">
            <SideBar></SideBar>
        </SheetContent>
    </Sheet>
    
  )
}
