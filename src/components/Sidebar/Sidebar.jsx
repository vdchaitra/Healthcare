import { navigationData } from "../../data/navigationData";
import { headerData } from "../../data/headerData";
import "./Sidebar.css";

// Import required icons from Lucide
import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart2,
  HeartPulse,
  MessageSquare,
  HelpCircle,
  Settings,
} from "lucide-react";

// Icon map: links string names to components
const Icons = {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart2,
  HeartPulse,
  MessageSquare,
  HelpCircle,
  Settings,
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        
        {/* Logo/Header */}
        <div className="sidebar-flex">
          <h1 className="header-logo">{headerData.logo}</h1>
          <h1 className="header-color">{headerData.l}</h1>
        </div>

        {/* General Section */}
        <div className="nav-section">
          <h3 className="nav-section-title">{navigationData.general.title}</h3>
          <nav className="nav-menu">
            {navigationData.general.items.map((item, index) => {
              const Icon = Icons[item.icon];
              return (
                <a
                  key={index}
                  href={item.url}
                  className={`nav-item ${item.active ? "nav-item-active" : ""}`}
                >
                  <span className="nav-icon">{Icon && <Icon size={18} />}</span>
                  <span className="nav-label">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Tools Section (excluding Settings) */}
        <div className="nav-section">
          <h3 className="nav-section-title">{navigationData.tools.title}</h3>
          <nav className="nav-menu">
            {navigationData.tools.items
              .filter((item) => item.label !== "Setting")
              .map((item, index) => {
                const Icon = Icons[item.icon];
                return (
                  <a key={index} href={item.url} className="nav-item">
                    <span className="nav-icon">{Icon && <Icon size={18} />}</span>
                    <span className="nav-label">{item.label}</span>
                  </a>
                );
              })}
          </nav>
        </div>

        {/* Settings at the Bottom */}
        <div className="sidebar-bottom">
          {navigationData.tools.items
            .filter((item) => item.label === "Setting")
            .map((item, index) => {
              const Icon = Icons[item.icon];
              return (
                <a key={index} href={item.url} className="nav-item">
                  <span className="nav-icon">{Icon && <Icon size={18} />}</span>
                  <span className="nav-label">{item.label}</span>
                </a>
              );
            })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
