import { activityData } from "../../data/activityData"
import "./ActivityFeed.css"

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3 className="activity-title">{activityData.title}</h3>
        <span className="activity-subtitle">{activityData.subtitle}</span>
      </div>

      <div className="activity-chart">
        {activityData.chartData.map((dayData, dayIndex) => (
          <div key={dayIndex} className="chart-column">
            <div className="chart-bars">
              {dayData.bars.map((bar, barIndex) => (
                <div
                  key={barIndex}
                  className={`chart-bar chart-bar-${bar.color}`}
                  style={{ height: `${bar.height}%` }}
                ></div>
              ))}
            </div>
            <div className="chart-day">{dayData.day}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
