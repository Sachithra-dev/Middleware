import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-icons">
        <div className="notification-icon">
          <i className="fas fa-bell"></i> {/* Bell icon, use appropriate font or image */}
        </div>
        <div className="profile-icon">
          <i className="fas fa-user-circle"></i> {/* Profile icon, use appropriate font or image */}
        </div>
      </div>
    </div>
  );
};

export default Header;
