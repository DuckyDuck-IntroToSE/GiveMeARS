import { LogoDashboard } from "./icons"
import { SiderBarRoutes } from "./sidebar-routes"

const SideBar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm '>
      <div className='p-6 flex flex-col items-center w-full'>
        <LogoDashboard />
      </div>
      <div className="flex flex-col w-full">
        <SiderBarRoutes />
      </div>
    </div>
  )
}

export default SideBar
