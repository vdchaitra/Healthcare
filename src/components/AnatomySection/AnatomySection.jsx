import { healthData } from "../../data/healthData";
import HealthStatusCard from "../HealthStatusCard/HealthStatusCard";
import { ChevronDown, Maximize2, Heart, Footprints } from "lucide-react";
import "./AnatomySection.css";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-main">
        <div className="anatomy-illustration">
          <img
            src={healthData.anatomyImage || "/placeholder.svg"}
            alt="Human anatomy illustration"
            className="anatomy-image"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/200x350/f3f4f6/6b7280?text=Human+Body";
            }}
          />

          {/* Health indicators */}
          <div className="health-indicator heart-indicator">
            <span size={14} className="indicator-text">❤️ Healthy Heart</span>
          </div>

          <div className="health-indicator leg-indicator">
            
            <span size={14} className="indicator-text">🦵 Healthy Leg</span>
          </div>
        </div>

        <button className="expand-button" aria-label="Expand anatomy view">
          <Maximize2 size={16} />
        </button>
      </div>

      <div className="health-status-panel">
  {healthData.healthStatuses.map((status, index) => (
    <div className="status-tile" key={index}>
      <HealthStatusCard
        title={status.title}
        date={status.date}
        status={status.status}
        icon={status.icon}
        progress={status.progress}
      />
    </div>
  ))}

  <div className="dashboard-filter-fil">
    <span className="filter-text">Details</span>
    <ChevronDown className="filter-arrow" size={16} />
  </div>
</div>

    </div>
  );
};

export default AnatomySection;
