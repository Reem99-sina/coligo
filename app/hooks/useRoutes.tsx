
import { usePathname } from "next/navigation";
import { useMemo } from "react"
import DashboardIcon from '@mui/icons-material/Dashboard';
import TodayIcon from '@mui/icons-material/Today';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { signOut } from "next-auth/react"


const useRoutes = () => {
    const pathname = usePathname()
    
    const routes = useMemo(() => [
        {
            label: "dashboard",
            href: "/dashboard",
            icon: <DashboardIcon/>,
            active: pathname == "/dashboard"
        }, {
            label: "schedule",
            href: "/dashboard",
            icon: <TodayIcon/>,
            active: pathname == "/schedule"
        }, {
            label: "courses",
            href: "/dashboard",
            icon: <GolfCourseIcon/>,
            active: pathname == "/course"
        }, {
            label: "gradebook",
            href: "/dashboard",
            icon: <SchoolIcon/>,
            active: pathname == "/gradebook"
        }, {
            label: "gradebook",
            href: "/dashboard",
            icon: <SchoolIcon/>,
            active: pathname == "/gradebook"
        },{
            label: "performance",
            href: "/dashboard",
            icon: <TrendingUpIcon/>,
            active: pathname == "/performance"
        }, {
            label: "Announcement",
            href: "/dashboard",
            icon: <AnnouncementIcon/>,
            active: pathname == "/announcement"
        }, {
            label: "log out",
            href: "/",
            active: pathname == "/performance",
            icon: ""
        }
    ], [pathname])
    return routes
}
export default useRoutes