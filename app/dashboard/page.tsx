
import Sidebar from "@/app/components/sidebar/sidebar"
import BodyDashboard from "@/app/components/body/BodyDashboard"
import ReviewCard from "@/app/components/body/AnnounceCard"
import getAnnouncement from "@/app/actions/getAnnouncements"
import getQuize from "@/app/actions/getQuizes"
import {Stack} from "@mui/material"

const DashboardPage=async()=>{ 
    const announcement=await getAnnouncement()
    const qizes=await getQuize()
    return(
        <Sidebar>
            <BodyDashboard/>
            <Stack direction="row">
            <ReviewCard title="Announcement" description="whsjdhskjdhsj" link="create"dataReview={announcement}flex={8}type="announcement"qizes={qizes||[]}/>
            <ReviewCard title="quizes" description="whsjdhskjdhsj" link="create"dataReview={qizes}flex={1}type="quize"qizes={qizes||[]}/>
            </Stack>
        </Sidebar>
    )
}
export default DashboardPage