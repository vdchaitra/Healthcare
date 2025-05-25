import AnatomySection from "../AnatomySection/AnatomySection"
import CalendarView from "../CalendarView/CalendarView"
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule"
import ActivityFeed from "../ActivityFeed/ActivityFeed"
import "./DashboardMainContent.css"
import { ChevronDown } from "lucide-react";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="dashboard-filter">
          <span className="filter-text">This Week</span>
          <ChevronDown className="filter-arrow" size={16} />
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-row">
          <AnatomySection />
          <CalendarView />
          
          
        </div>

        <div className="dashboard-row">
          <ActivityFeed />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  )
}

export default DashboardMainContent
