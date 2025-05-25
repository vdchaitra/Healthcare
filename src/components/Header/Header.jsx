import { headerData } from "../../data/headerData";
import "./Header.css";

import { Search, Bell, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-container">
          <Search className="search-icon" size={16} />
          <input
            type="text"
            placeholder={headerData.searchPlaceholder}
            className="search-input"
          />
          <div className="notification-icon">
            <Bell className="bell-icon" size={18} />
            <span className="notification-dot" />
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="user-profile">
          <img
            src={headerData.userAvatar || "/placeholder.svg"}
            alt="User Avatar"
            className="user-avatar"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/36x36/06b6d4/ffffff?text=U";
            }}
          />
        </div>
        <button className="add-button">
          <Plus size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
