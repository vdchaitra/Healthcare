import "./HealthStatusCard.css"

const HealthStatusCard = ({ title, date, status, icon, progress }) => {
  return (
    <div className="health-status-card">
      <div className="status-header">
        <span className="status-icon">{icon}</span>
        <span className="status-title">{title}</span>
      </div>
      <div className="status-date">Date: {date}</div>
      <div className="status-progress">
        <div className="progress-bar">
          <div className={`progress-fill progress-${status}`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default HealthStatusCard
