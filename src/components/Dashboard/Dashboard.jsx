import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import DashboardMainContent from "../DashboardMainContent/DashboardMainContent"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default Dashboard
